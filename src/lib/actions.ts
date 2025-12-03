'use server';

import {
  customerSelectId,
  customerAmountId,
  customerStatusId,
  dataType,
  getDataFromDb,
  addNewInvoice
} from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function handleSubmit(formData: FormData) {
  const customerId = formData.get(customerSelectId) as string;
  const amount = formData.get(customerAmountId) as string;
  const status = formData.get(customerStatusId) as string;
  const data = await getDataFromDb();
  const firstInvoice = data.find(obj => obj.customerID === customerId);
  if (!firstInvoice) return;

  const newInvoice: dataType = {
    ...firstInvoice,
    amount: Number(amount),
    paidStatus: status === 'Paid',
    invoiceID: crypto.randomUUID(),
    date: new Date().toISOString().split('T')[0],
    customerID: customerId
  };

  await addNewInvoice(newInvoice);
  revalidatePath('/api/get-data-from-db');
  revalidatePath('/api/get-user-data');
  revalidatePath('/');
  revalidatePath('/graphics');
  redirect(`/?query=${encodeURIComponent(firstInvoice.username)}`);
}
