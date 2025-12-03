export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// export const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
// export const base = 'https://project-1328.vercel.app'
export const base = 'http://localhost:3000'
// export function baseURL(path: string) {
//   return `${path}`;
// }

export function baseURL(path: string) {
  return `${base}${path}`;
}
