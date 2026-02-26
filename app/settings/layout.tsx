'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex gap-[20px] min-h-[calc(100vh-120px-200px)] w-full">
      {/* 左侧：垂直方向展示的 Menus */}
      <aside className="w-[200px] bg-white border border-gray-200 rounded shrink-0 self-start">
        <h3 className="p-4 border-b border-gray-100 m-0 text-base font-bold text-gray-800">管理端设置</h3>
        <ul className="list-none p-0 m-0">
          <li>
            <Link 
              href="/settings/categories" 
              className={`block p-4 text-gray-700 no-underline transition-colors hover:bg-gray-50 ${pathname === '/settings/categories' ? 'bg-[#e3a348] text-white hover:bg-[#e3a348]' : ''}`}
            >
              分类管理
            </Link>
          </li>
          <li>
            <Link 
              href="/settings/accounts" 
              className={`block p-4 text-gray-700 no-underline transition-colors hover:bg-gray-50 ${pathname === '/settings/accounts' ? 'bg-[#e3a348] text-white hover:bg-[#e3a348]' : ''}`}
            >
              账号管理
            </Link>
          </li>
          <li>
            <Link 
              href="/settings/system" 
              className={`block p-4 text-gray-700 no-underline transition-colors hover:bg-gray-50 ${pathname === '/settings/system' ? 'bg-[#e3a348] text-white hover:bg-[#e3a348]' : ''}`}
            >
              系统设置
            </Link>
          </li>
        </ul>
      </aside>

      {/* 右侧：对应菜单的内容区切换 */}
      <main className="flex-1 bg-white border border-gray-200 rounded p-6">
        {children}
      </main>
    </div>
  );
}
