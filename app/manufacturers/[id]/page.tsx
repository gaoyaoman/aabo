'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { use } from 'react';
import CheckboxGroup from '@/components/ui/CheckboxGroup';
import CustomCheckbox from '@/components/ui/CustomCheckbox';

export default function ManufacturerProductsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const searchParams = useSearchParams();
  const regions = searchParams.getAll('region');

  return (
    <div className="w-full flex gap-[20px]">
      {/* 左侧：筛选 */}
      <div className="w-[304px] bg-[#FFFFFF] rounded-[12px] py-[24px] px-[20px] shrink-0">
        {regions.length > 0 && (
          <div className="mb-8">
            <div className="text-[16px] font-[600] tracking-[0px] leading-[21.82px] text-[rgba(135,144,155,1)] text-left align-top mb-3">已选销售区域</div>
            <div className="flex flex-wrap gap-2">
              {regions.map(r => (
                <span key={r} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-sm border border-blue-100">
                  {r}
                </span>
              ))}
            </div>
          </div>
        )}

        <CheckboxGroup title="类别">
          <CustomCheckbox label="建筑材料" checked={false} />
          <CustomCheckbox label="机械设备" checked={false} />
          <CustomCheckbox label="电子元器件" checked={false} />
        </CheckboxGroup>

        <CheckboxGroup title="内容类型">
          <CustomCheckbox label="现货" checked={false} />
          <CustomCheckbox label="定制" checked={false} />
        </CheckboxGroup>
      </div>

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
