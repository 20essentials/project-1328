import { getUsersData } from '@/lib/data';
export async function GET() {
  try {
    const data = await getUsersData();

    return Response.json(
      { ok: true, data },
      {
        status: 200
      }
    );
  } catch (err) {
    console.error('API ERROR: ', err);
    return Response.json(
      { ok: false, data: [] },
      {
        status: 500,
        statusText: 'Fail'
      }
    );
  }
}
