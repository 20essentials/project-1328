import { sleep } from "./utils";

export interface UserType {
  customerID: string;
  username: string;
  email: string;
  userImage: string;
}

export interface dataType extends UserType {
  invoiceID: string;
  amount: number;
  date: string;
  paidStatus: boolean;
}

export let data: dataType[] = [
  {
    customerID: '1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0001',
    invoiceID: 'd52f08a1-db3c-4cbb-a2e6-8c2a9f0e0001',
    username: 'Tom Preston-Werner',
    email: 'tom@example.com',
    amount: 150.0,
    date: '2023-09-15',
    paidStatus: true,
    userImage: 'https://avatars.githubusercontent.com/u/1?v=4'
  },
  {
    customerID: '1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0002',
    invoiceID: 'd52f08a1-db3c-4cbb-a2e6-8c2a9f0e0002',
    username: 'Chris Wanstrath',
    email: 'chris@example.com',
    amount: 89.99,
    date: '2023-10-05',
    paidStatus: false,
    userImage: 'https://avatars.githubusercontent.com/u/2?v=4'
  },
  {
    customerID: '1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0003',
    invoiceID: 'd52f08a1-db3c-4cbb-a2e6-8c2a9f0e0003',
    username: 'PJ Hyett',
    email: 'pj@example.com',
    amount: 120.25,
    date: '2023-07-20',
    paidStatus: true,
    userImage: 'https://avatars.githubusercontent.com/u/3?v=4'
  },
  {
    customerID: '1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0004',
    invoiceID: 'd52f08a1-db3c-4cbb-a2e6-8c2a9f0e0004',
    username: 'defunkt',
    email: 'defunkt@example.com',
    amount: 45.6,
    date: '2023-08-30',
    paidStatus: false,
    userImage: 'https://avatars.githubusercontent.com/u/323?v=4'
  },
  {
    customerID: '1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0005',
    invoiceID: 'd52f08a1-db3c-4cbb-a2e6-8c2a9f0e0005',
    username: 'gaearon',
    email: 'gaearon@example.com',
    amount: 230.75,
    date: '2023-11-11',
    paidStatus: true,
    userImage: 'https://avatars.githubusercontent.com/u/810438?v=4'
  },
  {
    customerID: '1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0006',
    invoiceID: 'd52f08a1-db3c-4cbb-a2e6-8c2a9f0e0006',
    username: 'yyx990803',
    email: 'yyx@example.com',
    amount: 67.4,
    date: '2023-09-25',
    paidStatus: false,
    userImage: 'https://avatars.githubusercontent.com/u/499550?v=4'
  },
  {
    customerID: '1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0007',
    invoiceID: 'd52f08a1-db3c-4cbb-a2e6-8c2a9f0e0007',
    username: 'ruanyf',
    email: 'ruanyf@example.com',
    amount: 99.9,
    date: '2023-06-14',
    paidStatus: true,
    userImage: 'https://avatars.githubusercontent.com/u/905434?v=4'
  },
  {
    customerID: '1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0008',
    invoiceID: 'd52f08a1-db3c-4cbb-a2e6-8c2a9f0e0008',
    username: 'octocat',
    email: 'octocat@example.com',
    amount: 10.0,
    date: '2023-12-01',
    paidStatus: false,
    userImage: 'https://avatars.githubusercontent.com/u/583231?v=4'
  },
  {
    customerID: '1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0009',
    invoiceID: 'd52f08a1-db3c-4cbb-a2e6-8c2a9f0e0009',
    username: 'someuser123',
    email: 'someuser@example.com',
    amount: 150.0,
    date: '2023-08-01',
    paidStatus: true,
    userImage: 'https://avatars.githubusercontent.com/u/100000?v=4'
  },
  {
    customerID: '1f4d5c60-7d3e-4e08-aa12-9f8b7a6d0010',
    invoiceID: 'd52f08a1-db3c-4cbb-a2e6-8c2a9f0e0010',
    username: 'anotheruser456',
    email: 'another@example.com',
    amount: 75.25,
    date: '2023-10-18',
    paidStatus: false,
    userImage: 'https://avatars.githubusercontent.com/u/100001?v=4'
  }
];

export async function getDataFromDb() {
  return data;
}

export async function deleteRowFromDb(invoiceID: dataType['invoiceID']) {
  data = data.filter(row => row.invoiceID !== invoiceID);
}

export async function updateStatusOfInvoice(invoiceID: dataType['invoiceID']) {
  data = data.map(row => {
    if (row.invoiceID === invoiceID) return { ...row, paidStatus: true };
    return row;
  });
}

export async function getUsersData(): Promise<UserType[]> {
  //Igualmente esto deberias traerlo de la base de datos de users (en lugar de hacer esto)
  const newData: UserType[] = [];
  for (let i = 0; i < data.length; i++) {
    const currentRow = data[i];
    if (newData.some(el => el.customerID === currentRow.customerID)) continue;
    newData.push({
      customerID: currentRow.customerID,
      username: currentRow.username,
      email: currentRow.email,
      userImage: currentRow.userImage
    });
  }
  return newData;
}

export const customerSelectId = 'customerSelectId';
export const customerAmountId = 'customerAmountId';
export const customerStatusId = 'customerStatusId';

export async function addNewInvoice(dataNew: dataType) {
  data.push(dataNew);
  await sleep(200);
}
