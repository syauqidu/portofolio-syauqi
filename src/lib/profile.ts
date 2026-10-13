import { statSync } from 'node:fs';
import { resolve } from 'node:path';
import { profile } from '../data/profile';

// Public assets are optional. Rebuild after adding or replacing either file.
export function getProfileAssets() {
  const available = (url: string) => {
    try {
      const file = statSync(resolve('public', url.slice(1)));
      return file.isFile() && file.size > 0 ? url : undefined;
    } catch {
      return undefined;
    }
  };

  return {
    portrait: available(profile.portraitPath),
    cv: available(profile.cvPath),
  };
}
