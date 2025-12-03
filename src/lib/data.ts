import { db } from "./db";
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

export const customerSelectId = 'customerSelectId';
export const customerAmountId = 'customerAmountId';
export const customerStatusId = 'customerStatusId';

// ------------------ FUNCIONES ------------------

// Obtener todas las facturas
export async function getDataFromDb(): Promise<dataType[]> {
  const res = await db.execute(`
    SELECT i.invoiceID, i.customerID, u.username, u.email, u.userImage, i.amount, i.date, i.paidStatus
    FROM invoices i
    JOIN users u ON i.customerID = u.customerID
    ORDER BY i.date DESC
  `);

  return res.rows.map(row => ({
    invoiceID: row.invoiceID,
    customerID: row.customerID,
    username: row.username,
    email: row.email,
    userImage: row.userImage,
    amount: row.amount,
    date: row.date,
    paidStatus: row.paidStatus === 1
  })) as dataType[];
}

// Eliminar una factura por invoiceID
/* export async function deleteRowFromDb(invoiceID: dataType['invoiceID']) {
  await db.execute(
    `DELETE FROM invoices WHERE invoiceID = ?`,
    [invoiceID]
  );
}
 */
// Actualizar el estado de pago de una factura
/* export async function updateStatusOfInvoice(invoiceID: dataType['invoiceID']) {
  await db.execute(
    `UPDATE invoices SET paidStatus = 1 WHERE invoiceID = ?`,
    [invoiceID]
  );
} */

// Obtener usuarios únicos
export async function getUsersData(): Promise<UserType[]> {
  const res = await db.execute(`SELECT * FROM users ORDER BY username ASC`);
  return res.rows.map(row => ({
    customerID: row.customerID,
    username: row.username,
    email: row.email,
    userImage: row.userImage
  })) as UserType[];
}

// Agregar una nueva factura
export async function addNewInvoice(dataNew: dataType) {
  // Asegurar que el usuario exista
  const userExists = await db.execute(
    `SELECT 1 FROM users WHERE customerID = ?`,
    [dataNew.customerID]
  );

  if (userExists.rows.length === 0) {
    await db.execute(
      `INSERT INTO users (customerID, username, email, userImage) VALUES (?, ?, ?, ?)`,
      [dataNew.customerID, dataNew.username, dataNew.email, dataNew.userImage]
    );
  }

  // Insertar la nueva factura
  await db.execute(
    `INSERT INTO invoices (invoiceID, customerID, amount, date, paidStatus) VALUES (?, ?, ?, ?, ?)`,
    [
      dataNew.invoiceID,
      dataNew.customerID,
      dataNew.amount,
      dataNew.date,
      dataNew.paidStatus ? 1 : 0
    ]
  );

  await sleep(200);
}
