'use client';
import { dataType } from '@/lib/data';
import { DeleteRow } from './DeleteRow';
import { useState } from 'react';
import { ButtonStatus } from './ButtonStatus';

export function Tbody({ filteredData }: { filteredData: dataType[] }) {
  const [data, setData] = useState(filteredData);

  function deleteRowFromLocalState(invoiceID: dataType['invoiceID']) {
    setData(prevData => prevData.filter(row => row.invoiceID !== invoiceID));
  }

  return (
    <tbody>
      {data.map(
        ({ invoiceID, amount, date, email, paidStatus, userImage, username }) => {
          return (
            <tr key={invoiceID}>
              <td>
                <img src={userImage} alt={username} />
                <output>{username}</output>
              </td>
              <td>{email}</td>
              <td>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(amount)}
              </td>
              <td>{date}</td>
              <td className={`am-button-status`}>
                <ButtonStatus paidStatus={paidStatus} invoiceID={invoiceID} />
              </td>
              <DeleteRow
                deleteRowFromLocalState={deleteRowFromLocalState}
                invoiceID={invoiceID}
              />
            </tr>
          );
        }
      )}
    </tbody>
  );
}
