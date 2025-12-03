'use client';
import { updateInvoiceStatus } from '@/lib/actions/invoices';
import { dataType } from '@/lib/data';
import { useState } from 'react';

export function ButtonStatus({
  paidStatus,
  invoiceID
}: {
  paidStatus: boolean;
  invoiceID: dataType['invoiceID'];
}) {
  const [status, setStatus] = useState(paidStatus);

  async function changeStatus() {
    if (paidStatus) return;
    await updateInvoiceStatus(invoiceID);
    setStatus(true);
  }

  return (
    <button
      className={`${status ? 'paid-td' : 'pending-td'}`}
      onClick={changeStatus}
    >
      {status ? 'Paid 💵' : 'Pending ⏲'}
    </button>
  );
}
