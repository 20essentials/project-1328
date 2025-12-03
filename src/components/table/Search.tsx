'use client';

import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, useRouter } from 'next/navigation';

export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const text = searchParams.get('query') ?? '';

  const handleChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set('query', value);
      } else {
        params.delete('query');
      }

      router.replace(`?${params.toString()}`);
    },
    400
  );

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <input
        type='text'
        placeholder='Search'
        defaultValue={text}
        onChange={handleChange}
      />
    </form>
  );
};
