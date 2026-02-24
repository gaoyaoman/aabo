'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { useEffect, useState } from 'react';

export default function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { userRole, isLoggedIn, setRole } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHomePage = pathname === '/';

  const allTabs = [
    { name: '首页', path: '/' },
    { name: '产品', path: '/products' },
    { name: '制造商', path: '/manufacturers', roles: ['client', 'admin', 'guest'] },
    { name: '项目报价', path: '/quotes', roles: ['client', 'guest'] },
    { name: '文件管理', path: '/files', roles: ['supplier'] }
  ];

  const tabs = allTabs.filter(tab => !tab.roles || tab.roles.includes(mounted ? userRole : 'guest'));

  const goSettings = () => router.push('/settings/categories');

  const cycleRole = () => {
    const roles: ('guest' | 'client' | 'admin' | 'supplier')[] = ['guest', 'client', 'admin', 'supplier'];
    const nextRole = roles[(roles.indexOf(userRole) + 1) % roles.length];
    setRole(nextRole);
    router.refresh();
  };

  return (
    <header className={`w-full z-50 pointer-events-auto ${isHomePage ? 'absolute top-0 left-0 bg-white/10 border-none text-white' : 'relative bg-white border-b border-gray-200 text-gray-900'}`}>
      <div className={`flex justify-between items-center px-5 h-10 text-sm ${isHomePage ? 'bg-transparent' : 'bg-gray-50'}`}>
        <div className="flex gap-4">
          <button className="hover:opacity-80 cursor-pointer">Become a supplier</button>
          <button className="hover:opacity-80 cursor-pointer">Buyer Center</button>
          {mounted && (
            <button onClick={cycleRole} className="ml-4 px-2 py-1 bg-blue-500 text-white rounded text-xs cursor-pointer">
              Demo: Switch Role (Current: {userRole})
            </button>
          )}
        </div>
        <div className="flex gap-4 items-center">
          <select className="bg-transparent border-none outline-none cursor-pointer">
            <option className="text-black">地区切换</option>
          </select>
          <select className="bg-transparent border-none outline-none cursor-pointer">
            <option className="text-black">多语言切换</option>
          </select>
          
          {mounted && isLoggedIn ? (
            userRole === 'admin' ? (
              <span className="cursor-pointer hover:opacity-80" onClick={goSettings}>设置</span>
            ) : (
              <span className="cursor-pointer hover:opacity-80">我的收藏</span>
            )
          ) : null}
          
          {mounted && !isLoggedIn ? (
            <span className="cursor-pointer hover:opacity-80" onClick={() => { setRole('client'); router.refresh(); }}>登录 / 我的信息</span>
          ) : mounted && isLoggedIn ? (
            <span className="cursor-pointer hover:opacity-80" onClick={() => { setRole('guest'); router.refresh(); }}>退出登录</span>
          ) : null}
        </div>
      </div>

      <div className="flex justify-between items-center px-5 h-20">
        <div className="flex-shrink-0">
          {isHomePage ? (
            <Link href="/" className="text-2xl font-bold tracking-tighter cursor-pointer block">LOGO</Link>
          ) : (
            <input 
              type="text" 
              placeholder="长条搜索控件..." 
              className="w-[400px] h-9 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
            />
          )}
        </div>

        <nav className="flex gap-6 h-full items-center">
          {tabs.map(tab => {
            const isActive = tab.path === '/' ? pathname === '/' : pathname.startsWith(tab.path);
            return (
              <Link 
                key={tab.path} 
                href={tab.path} 
                className={`font-bold hover:opacity-80 transition-colors h-full flex items-center border-b-2 cursor-pointer ${
                  isHomePage 
                    ? (isActive ? 'text-white border-white' : 'text-white/80 border-transparent hover:border-white/50') 
                    : (isActive ? 'text-[#e3a348] border-[#e3a348]' : 'text-gray-600 border-transparent hover:border-gray-300 hover:text-gray-900')
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
