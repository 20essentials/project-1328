import { ButtonToInvoice } from '@/components/table/ButtonToInvoice';
import { DataTable } from '@/components/table/DataTable';
import { Search } from '@/components/table/Search';
import { Suspense } from 'react';

export default async function HomeTable({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const query = params.query as string;

  return (
    <section className='am-container am-container-home-table'>
      <aside className='am-top'>
        <Search />
        <ButtonToInvoice />
      </aside>
      <Suspense key={`${query}-i`} fallback={<h3>Loading...</h3>}>
        <DataTable query={query as string | undefined} />
      </Suspense>
    </section>
  );
}
