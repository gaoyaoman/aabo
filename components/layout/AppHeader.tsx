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
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isHomePage = pathname === '/';

  const allTabs = [
    { name: language === 'zh' ? '首页' : 'HOME', path: '/' },
    { name: language === 'zh' ? '产品' : 'PRODUCT', path: '/products' },
    { name: language === 'zh' ? '制造商' : 'MANUFACTURER', path: '/manufacturers', roles: ['client', 'admin', 'guest'] },
    { name: language === 'zh' ? '项目报价' : 'PROJECT', path: '/quotes', roles: ['client', 'guest'] },
    { name: language === 'zh' ? '文件管理' : 'FILE MANAGEMENT', path: '/files', roles: ['supplier'] }
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
    <header className={`w-full z-50 pointer-events-auto ${isHomePage ? 'absolute top-0 left-0 bg-transparent border-none text-white' : 'relative bg-white border-b border-gray-200 text-gray-900'}`}>
      {/* 顶部 6px 装饰条 */}
      <div className="flex h-[6px] w-full">
        <div className="w-[100px] bg-[#e3a348] shrink-0"></div>
        <div className="flex-1 bg-[#4e416e]"></div>
      </div>

      <div className={`flex justify-between items-center px-[160px] h-[44px] ${isHomePage ? 'bg-[#000000] text-white' : 'bg-white border-b border-[#e5e6eb] text-[#87909b]'} text-[14px] font-[400] leading-[20px]`}>
        <div className="flex gap-4">
          {isHomePage && (
            <>
              <button className="hover:opacity-80 cursor-pointer">Become a supplier</button>
              <button className="hover:opacity-80 cursor-pointer">Buyer Center</button>
            </>
          )}
          {mounted && (
            <button onClick={cycleRole} className="ml-4 px-2 py-1 bg-blue-500 text-white rounded text-xs cursor-pointer">
              Demo: Switch Role (Current: {userRole})
            </button>
          )}
        </div>
        <div className="flex gap-[48px] items-center">
          <select className={`bg-transparent border-none outline-none cursor-pointer ${isHomePage ? 'text-white' : 'text-[#87909b]'}`}>
            <option className="text-black">地区切换</option>
          </select>
          <select 
            className={`bg-transparent border-none outline-none cursor-pointer ${isHomePage ? 'text-white' : 'text-[#87909b]'}`}
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'en' | 'zh')}
          >
            <option value="en" className="text-black">English</option>
            <option value="zh" className="text-black">中文</option>
          </select>
          
          {mounted && isLoggedIn ? (
            userRole === 'admin' ? (
              <span className="cursor-pointer hover:opacity-80" onClick={goSettings}>设置</span>
            ) : (
              <span className="cursor-pointer hover:opacity-80">我的收藏</span>
            )
          ) : null}
          
          {mounted && !isLoggedIn ? (
            <span className={`cursor-pointer hover:opacity-80 ${isHomePage ? 'text-[#e3a348]' : 'text-[#87909b]'}`} onClick={() => { setRole('client'); router.refresh(); }}>登录 / 我的信息</span>
          ) : mounted && isLoggedIn ? (
            <span className="cursor-pointer hover:opacity-80" onClick={() => { setRole('guest'); router.refresh(); }}>退出登录</span>
          ) : null}
        </div>
      </div>

      <div className={`flex justify-between items-center px-[160px] h-[84px] ${isHomePage ? 'bg-[#000000]' : 'bg-white'}`}>
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className={`text-2xl font-bold tracking-tighter cursor-pointer block ${isHomePage ? 'text-white' : 'text-gray-900'}`}>LOGO</Link>
          
          {!isHomePage && (
            <div className="ml-[50px] flex items-center bg-white border border-[#e3a348] rounded-[10px] w-[903px] h-[42px] overflow-hidden">
              <input 
                type="text" 
                placeholder="Search products, suppliers, or categories..." 
                className="flex-1 bg-transparent border-none outline-none px-4 text-gray-800 text-[14px] h-full"
              />
              <button className="bg-[#e3a348] text-white px-[32px] h-full font-[600] text-[16px] leading-[22px] hover:bg-[#d19237] transition-colors cursor-pointer">
                Search
              </button>
            </div>
          )}
        </div>

        <nav className="flex gap-[84px] items-center">
          {tabs.map(tab => {
            const isActive = tab.path === '/' ? pathname === '/' : pathname.startsWith(tab.path);
            return (
              <Link 
                key={tab.path} 
                href={tab.path} 
                className="relative flex flex-col items-center justify-center cursor-pointer group"
              >
                <span className={`text-[16px] leading-[21px] transition-colors ${
                  isActive ? 'text-[#e3a348] font-[700]' : 'text-[#87909b] font-[600] hover:opacity-80'
                }`}>
                  {tab.name}
                </span>
                {isActive && (
                  <div className="absolute top-full mt-[10px] w-full h-[2px] bg-[#e3a348]"></div>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
