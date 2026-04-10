export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const base =
  process.env.NODE_ENV === 'production'
    ? 'https://my-project-1328.vercel.app'
    : 'http://localhost:3000';

export function baseURL(path: string) {
  return `${base}${path}`;
}
