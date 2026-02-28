'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import CheckboxGroup from '@/components/ui/CheckboxGroup';
import CustomCheckbox from '@/components/ui/CustomCheckbox';

export default function ManufacturerFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const regions = searchParams.getAll('region');
  const selectedCategories = searchParams.getAll('category');
  const selectedTypes = searchParams.getAll('type');

  const toggleFilter = (key: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const values = current.getAll(key);
    
    current.delete(key);
    
    if (values.includes(value)) {
      values.filter(v => v !== value).forEach(v => current.append(key, v));
    } else {
      [...values, value].forEach(v => current.append(key, v));
    }
    
    router.push(`?${current.toString()}`);
  };

  return (
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
        <CustomCheckbox 
          label="建筑材料" 
          checked={selectedCategories.includes('建筑材料')}
          onChange={() => toggleFilter('category', '建筑材料')}
        />
        <CustomCheckbox 
          label="机械设备" 
          checked={selectedCategories.includes('机械设备')}
          onChange={() => toggleFilter('category', '机械设备')}
        />
        <CustomCheckbox 
          label="电子元器件" 
          checked={selectedCategories.includes('电子元器件')}
          onChange={() => toggleFilter('category', '电子元器件')}
        />
      </CheckboxGroup>

      <CheckboxGroup title="内容类型">
        <CustomCheckbox 
          label="现货" 
          checked={selectedTypes.includes('现货')}
          onChange={() => toggleFilter('type', '现货')}
        />
        <CustomCheckbox 
          label="定制" 
          checked={selectedTypes.includes('定制')}
          onChange={() => toggleFilter('type', '定制')}
        />
      </CheckboxGroup>
    </div>
  );
}
