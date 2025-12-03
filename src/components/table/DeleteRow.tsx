'use client';
import { deleteInvoiceFromDb } from '@/lib/actions/invoices';

export function DeleteRow({
  invoiceID,
  deleteRowFromLocalState
}: {
  invoiceID: string;
  deleteRowFromLocalState: (invoiceId: string) => void;
}) {
  async function Clean() {
    await deleteInvoiceFromDb(invoiceID);
    deleteRowFromLocalState(invoiceID);
  }

  return (
    <td className='am-delete-td' onClick={Clean}>
      ❌{' '}
    </td>
  );
}
