import React from 'react';
import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className='flex justify-center pt-6 pb-6'>
      <div className='relative flex items-center justify-center w-11/12 rounded-full '>
        <MagnifyingGlassIcon className='absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform' />
        <Input
          placeholder='What do you wish to rent?'
          // value={search}
          // onChange={(event) => setSearch(event.target.value)}
          className=' pl-8 focus-visible:ring-offset-0 focus-visible:ring-0 rounded-3xl h-12'
        />
      </div>
    </div>
  );
};

export default SearchBar;
