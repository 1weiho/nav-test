'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        `bottom-0 h-16 w-screen bg-red-500 flex space-x-4 items-center`,
        pathname.includes('float') && 'absolute z-50'
      )}
    ></div>
  );
};

export default Nav;
