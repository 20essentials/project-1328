import { type dataType } from '@/lib/data';
import { Tbody } from './Tbody';
import { baseURL } from '@/lib/utils';
import { connection } from 'next/server';

export const DataTable = async ({ query }: { query?: string }) => {
  await connection();
  const res = await fetch(baseURL('/api/get-data-from-db'), {
    cache: 'force-cache'
  });
  if (!res.ok) return null;
  const { data } = (await res.json()) as { data: dataType[] };
  
  const filteredData = query
    ? data.filter(row => {
        const q = query.toLowerCase();

        if (q.startsWith('paid')) {
          return row.paidStatus === true;
        }
        if (q.startsWith('pendi')) {
          return row.paidStatus === false;
        }

        return Object.values(row).some(value =>
          String(value).toLowerCase().includes(q)
        );
      })
    : data;

  return (
    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Email</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
          <th>Delete</th>
        </tr>
      </thead>
      <Tbody filteredData={filteredData} />
    </table>
  );
};
