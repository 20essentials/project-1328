"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteInvoiceFromDb(invoiceID: string) {
  await db.execute({
    sql: "DELETE FROM invoices WHERE invoiceID = ?",
    args: [invoiceID]
  });

  revalidatePath("/api/get-data-from-db");
  revalidatePath("/api/get-user-data");
  revalidatePath("/"); 

  return { ok: true };
}

export async function updateInvoiceStatus(invoiceID: string) {
  await db.execute({
    sql: "UPDATE invoices SET paidStatus = 1 WHERE invoiceID = ?",
    args: [invoiceID]
  });

  revalidatePath("/api/get-data-from-db");
  revalidatePath("/api/get-user-data");
  revalidatePath("/"); 

  return { ok: true };
}
