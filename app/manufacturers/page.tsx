'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CheckboxGroup from '@/components/ui/CheckboxGroup';
import CustomCheckbox from '@/components/ui/CustomCheckbox';
import Breadcrumb from '@/components/ui/Breadcrumb';

function ManufacturersContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedRegions = searchParams.getAll('region');
  const regions = ['中国', '美国', '英国', '加拿大', '德国'];

  const toggleRegion = (region: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const regions = current.getAll('region');
    
    current.delete('region');
    
    if (regions.includes(region)) {
      regions.filter(r => r !== region).forEach(r => current.append('region', r));
    } else {
      [...regions, region].forEach(r => current.append('region', r));
    }
    
    router.push(`/manufacturers?${current.toString()}`);
  };

  const manufacturers = [
    { id: 'm1', name: '高精建材设备有限公司', subtitle: '专业的高端建材制造', logo: 'https://picsum.photos/100/100?random=1' },
    { id: 'm2', name: '测试设备制造厂', subtitle: '领先的测试设备供应商', logo: 'https://picsum.photos/100/100?random=2' },
    { id: 'm3', name: '全球电子元器件集团', subtitle: '全球化的电子元件分销', logo: 'https://picsum.photos/100/100?random=3' },
    { id: 'm4', name: '精密化工原料厂', subtitle: '高纯度化工原料生产', logo: 'https://picsum.photos/100/100?random=4' },
    { id: 'm5', name: '重型机械制造集团', subtitle: '重型工程机械研发与制造', logo: 'https://picsum.photos/100/100?random=5' },
    { id: 'm6', name: '智能自动化科技', subtitle: '工业自动化解决方案', logo: 'https://picsum.photos/100/100?random=6' },
  ];

  const handleViewProducts = (id: string) => {
    const query = new URLSearchParams();
    selectedRegions.forEach(r => query.append('region', r));
    router.push(`/manufacturers/${id}?${query.toString()}`);
  };

  return (
    <div className="w-full flex gap-[20px] relative">
      <Breadcrumb items={[{ label: 'MANUFACTURER' }]} />
      {/* 左侧：销售区域筛选 */}
      <div className="w-[304px] bg-[#FFFFFF] rounded-[12px] py-[24px] px-[20px] shrink-0">
        <CheckboxGroup title="销售区域">
          {regions.map(region => (
            <CustomCheckbox 
              key={region}
              label={region}
              checked={selectedRegions.includes(region)}
              onChange={() => toggleRegion(region)}
            />
          ))}
        </CheckboxGroup>
      </div>

      {/* 右侧：制造商卡片列表 */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h2 className="font-bold text-xl">制造商列表</h2>
          <span className="text-gray-500 text-sm">共找到 {manufacturers.length} 个结果</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturers.map(m => (
            <div key={m.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="p-6 flex-1 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-100 mb-4 shadow-sm">
                  <img src={m.logo} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{m.name}</h3>
                <p className="text-gray-500 text-sm">{m.subtitle}</p>
              </div>
              <button 
                onClick={() => handleViewProducts(m.id)}
                className="w-full bg-gray-50 hover:bg-[#e3a348] text-gray-700 hover:text-white border-t border-gray-100 py-4 font-bold transition-colors cursor-pointer"
              >
                查看产品
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ManufacturersPage() {
  return (
    <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading...</div>}>
      <ManufacturersContent />
    </Suspense>
  );
}
