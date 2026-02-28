'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { useAuth } from '@/lib/auth';
import { categories, subCategories } from '@/lib/data';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('cat');
  const activeCategoryId = categoryParam ? parseInt(categoryParam) : 1;
  
  const { userRole } = useAuth();
  const isAdmin = userRole === 'admin';

  const activeSubCategories = subCategories.filter(sub => sub.parent === activeCategoryId);

  return (
    <div className="w-full flex gap-[20px] relative">
      <Breadcrumb items={[{ label: 'PRODUCT' }]} />
      {/* Left List */}
      <div className="w-[304px] bg-[#FFFFFF] rounded-[12px] py-[24px] px-0 shrink-0">
        <ul className="flex flex-col">
          {categories.map(cat => {
            const isActive = activeCategoryId === cat.id;
            return (
              <li key={cat.id} className="w-full h-[40px] mb-[10px] last:mb-0">
                <Link 
                  href={`/products?cat=${cat.id}`}
                  className={`w-full h-full text-left px-[20px] py-[9px] flex items-center relative group cursor-pointer transition-colors border-none outline-none ${isActive ? 'bg-[rgba(255,248,240,1)]' : 'bg-white hover:bg-[rgba(255,248,240,1)]'}`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[rgba(227,163,72,1)] transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                  <span className={`text-[16px] font-normal leading-[22px] transition-colors ${isActive ? 'text-[rgba(227,163,72,1)]' : 'text-[rgba(29,33,41,1)] group-hover:text-[rgba(227,163,72,1)]'}`}>
                    {cat.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Grid */}
      <div className="flex-1 bg-[#FFFFFF] rounded-[12px] px-[41px] py-[48px]">
        <div className="flex flex-wrap gap-x-[82px] gap-y-[48px]">
          {activeSubCategories.map(sub => (
            <div key={sub.id} className="flex flex-col items-center">
              <Link href={`/products/list?cat=${activeCategoryId}&sub=${sub.id}`} className="block">
                <div className="w-[160px] h-[160px] rounded-full relative overflow-hidden group cursor-pointer">
                  <img 
                    src={`https://picsum.photos/320/320?random=${sub.id}`} 
                    alt={sub.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    {isAdmin ? (
                      <>
                        <span className="text-white text-[24px] font-[700] mb-[12px]">进入</span>
                        <div className="w-[130px] h-[1px] bg-white"></div>
                        <span className="text-white text-[20px] font-[400] mt-[12px]">添加产品</span>
                      </>
                    ) : (
                      <span className="text-white text-[24px] font-[700]">进入</span>
                    )}
                  </div>
                </div>
              </Link>
              <span className="mt-[16px] text-[18px] text-[rgba(78,65,110,1)] font-[400] leading-[25px]">{sub.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
