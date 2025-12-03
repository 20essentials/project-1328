'use client';

import './graphic.css';
import './charts.min.css';
import { useEffect, useState } from 'react';
import { baseURL } from '@/lib/utils';
import { dataType } from '@/lib/data';

export function Graphic() {
  const [data, setData] = useState<{ date: string; amount: number }[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(baseURL('/api/get-data-from-db'), {
        next: { revalidate: 180 }
      });
      const { data } = (await res.json()) as { data: dataType[] };
      const newData = data.map(obj => ({
        date: obj.date,
        amount: obj.amount / 250
      }));
      setData(newData);
    }

    getData();
  }, []);

  return (
    <div id='bar-example-12'>
      <table className='charts-css bar show-labels show-primary-axis show-data-axes'>
        <caption>Bar Example #12</caption>
        <thead>
          <tr>
            <th scope='col'>Year</th>
            <th scope='col'>Progress</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.amount + item.date}>
              <th scope='row' className='am-th-year'>
                {item.date}
              </th>
              <td
                style={
                  {
                    '--size': item.amount
                  } as React.CSSProperties
                }
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
