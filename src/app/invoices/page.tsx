import {
  customerSelectId,
  customerAmountId,
  customerStatusId,
  UserType
} from '@/lib/data';
import { handleSubmit } from '@/lib/actions';
import { baseURL } from '@/lib/utils';
import { connection } from 'next/server';

export default async function Invoices() {
  await connection();
  const resp = await fetch(baseURL('/api/get-user-data'), {
    cache: 'force-cache'
  });
  if (!resp.ok) return null;
  const { data: usersData } = (await resp.json()) as { data: UserType[] };

  
  return (
    <section className='am-container am-container-invoice'>
      <h2>Create an Invoice</h2>
      <form action={handleSubmit}>
        <label htmlFor={customerSelectId}>Choose a Customer</label>
        <select name={customerSelectId} id={customerSelectId} required>
          {usersData.map(({ username, customerID }) => (
            <option key={customerID} value={customerID}>
              {username}
            </option>
          ))}
        </select>
        <label htmlFor={customerAmountId}>Write an Amount</label>
        <input
          type='number'
          name={customerAmountId}
          id={customerAmountId}
          required
        />
        <label htmlFor={customerStatusId}>Choose the Status</label>
        <select name={customerStatusId} id={customerStatusId} required>
          {['Pending', 'Paid'].map((status, i) => (
            <option key={i} value={status}>
              {status}
            </option>
          ))}
        </select>
        <input type='submit' value='Add Invoice ➕' />
      </form>
    </section>
  );
}
