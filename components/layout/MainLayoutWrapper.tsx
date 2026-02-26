'use client';

import { usePathname } from 'next/navigation';

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <main className={`flex-1 w-full bg-[#f7f7f7] ${isHomePage ? '' : 'px-[160px] py-[44px]'}`}>
      {children}
    </main>
  );
}
