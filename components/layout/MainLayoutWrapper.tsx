'use client';

import { usePathname } from 'next/navigation';

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isProductDetailPage = pathname.startsWith('/products/') && !pathname.includes('/category/');

  return (
    <main className={`flex-1 w-full ${isProductDetailPage ? 'bg-[#FFFFFF]' : 'bg-[#f7f7f7]'} ${isHomePage ? '' : 'px-[160px] py-[44px]'}`}>
      {children}
    </main>
  );
}
