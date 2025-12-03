'use client';

export function ButtonToInvoice() {
  function goToInvoice() {
    const input = document.querySelector('#glass-gold') as HTMLInputElement;
    if (!input) return;
    input.click();
  }

  return (
    <button onClick={goToInvoice} className='am-create-invoice'>
      Create Invoice&nbsp;➕
    </button>
  );
}
