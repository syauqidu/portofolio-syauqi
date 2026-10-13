import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, relative, dirname, extname } from 'node:path';

const root = resolve('dist');
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory()
    ? walk(resolve(directory, entry.name)) : resolve(directory, entry.name)))).flat();
}
const files = (await walk(root)).filter((file) => file.endsWith('.html'));
const errors = [];
let localLinks = 0;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const label = relative(root, file);
  if ((html.match(/<h1\b/g) || []).length !== 1) errors.push(`${label}: expected one h1`);
  if (!/<html[^>]*lang="en"/.test(html)) errors.push(`${label}: missing English language`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${label}: missing title`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${label}: missing description`);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const href = match[1];
    if (/^(?:[a-z]+:|\/\/)/i.test(href)) continue;
    if (href === '#') { errors.push(`${label}: placeholder link`); continue; }
    const [pathname, hash] = href.split('#');
    const cleanPath = decodeURIComponent(pathname.split('?')[0]);
    let target = cleanPath ? resolve(cleanPath.startsWith('/') ? root : dirname(file), cleanPath.replace(/^\//, '')) : file;
    try {
      if ((await stat(target)).isDirectory()) target = resolve(target, 'index.html');
      await stat(target);
      if (hash && extname(target) === '.html') {
        const targetHtml = await readFile(target, 'utf8');
        if (!targetHtml.includes(`id="${decodeURIComponent(hash)}"`)) errors.push(`${label}: missing fragment ${href}`);
      }
    } catch { errors.push(`${label}: missing local resource ${href}`); }
    localLinks++;
  }
}
const projectDirectory = resolve('src/content/projects');
for (const name of (await readdir(projectDirectory)).filter((name) => name.endsWith('.md'))) {
  const markdown = await readFile(resolve(projectDirectory, name), 'utf8');
  const frontmatter = markdown.split('---')[1] || '';
  if (/^published:\s*false\s*$/m.test(frontmatter)) {
    const title = frontmatter.match(/^title:\s*(.+)$/m)?.[1];
    for (const file of files) {
      if (title && (await readFile(file, 'utf8')).includes(title)) errors.push(`${relative(root, file)}: draft title leaked`);
    }
    if (files.some((file) => relative(root, file).replaceAll('\\', '/').startsWith(`projects/${name.slice(0, -3)}/`))) errors.push(`${name}: draft route generated`);
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Verified ${files.length} pages and ${localLinks} local links/assets: headings, metadata, routes, and fragments pass.`);
