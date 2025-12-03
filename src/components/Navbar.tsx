'use client';

import '@/styles/Navbar.css';
import { usePathname, useRouter } from 'next/navigation';
import { useRef } from 'react';
import { Fragment } from 'react/jsx-runtime';

const pages = ['/', '/invoices', '/graphics'];

export const Navbar = () => {
  const router = useRouter();
  const allInputs = useRef<(HTMLInputElement | null)[]>([]);
  const pathName = usePathname();

  const currentIndex = pages.indexOf(pathName); // ← sin estado

  function handleChange(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const index = allInputs.current.indexOf(target);
    router.push(pages[index]);
  }

  return (
    <div className='glass-radio-group'>
      {[
        { id: 'glass-silver', text: 'Table' },
        { id: 'glass-gold', text: 'Invoices' },
        { id: 'glass-platinum', text: 'Graphics' }
      ].map(({ id, text }, index) => (
        <Fragment key={index}>
          <input
            type='radio'
            name='plan'
            id={id}
            checked={index === currentIndex}
            onChange={handleChange}
            ref={el => {
              if (allInputs.current) {
                allInputs.current[index] = el;
              }
            }}
          />
          <label htmlFor={id}>{text}</label>
        </Fragment>
      ))}

      <div className='glass-glider'></div>
    </div>
  );
};
