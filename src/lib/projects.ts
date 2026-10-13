import { getCollection } from 'astro:content';

export const categories = {
  qa: 'Quality Assurance',
  uiux: 'UI/UX Design',
  development: 'Development',
} as const;

export async function getPublishedProjects() {
  return (await getCollection('projects', ({ data }) => data.published))
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export const projectPath = (id: string) => `/projects/${encodeURIComponent(id)}/`;
