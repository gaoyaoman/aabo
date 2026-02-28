import Link from 'next/link';
import { Suspense } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ManufacturerFilters from './ManufacturerFilters';

export default async function ManufacturerProductsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="w-full flex gap-[20px] relative">
      <Breadcrumb items={[
        { label: 'MANUFACTURER', href: '/manufacturers' },
        { label: `制造商产品 (ID: ${id})` }
      ]} />
      {/* 左侧：筛选 */}
      <Suspense fallback={<div className="w-[304px] bg-[#FFFFFF] rounded-[12px] py-[24px] px-[20px] shrink-0">Loading filters...</div>}>
        <ManufacturerFilters />
      </Suspense>

      {/* 右侧：产品列表 */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h2 className="font-bold text-xl">制造商产品 (ID: {id})</h2>
          <span className="text-gray-500 text-sm">共找到 12 个结果</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-gray-200 relative">
                <img src={`https://picsum.photos/400/300?random=${i + 20}`} alt="Product" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-1">
                <h3 className="font-bold text-lg mb-2">制造商专供产品 {i}</h3>
                <p className="text-gray-500 text-sm mb-4">高品质保证，支持全球配送</p>
                <div className="text-[#e3a348] font-bold text-xl">¥ 8,888.00</div>
              </div>
              <Link 
                href={`/manufacturers/${id}/products/${i}`}
                className="block text-center bg-gray-50 hover:bg-[#e3a348] text-gray-700 hover:text-white border-t border-gray-100 py-3 font-bold transition-colors"
              >
                查看详情
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
