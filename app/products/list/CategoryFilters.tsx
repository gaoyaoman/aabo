'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import CheckboxGroup from '@/components/ui/CheckboxGroup';
import CustomCheckbox from '@/components/ui/CustomCheckbox';

export default function CategoryFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const selectedManufacturers = searchParams.getAll('manufacturer');
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
      <CheckboxGroup title="厂家">
        <CustomCheckbox 
          label="高精建材设备" 
          checked={selectedManufacturers.includes('高精建材设备')}
          onChange={() => toggleFilter('manufacturer', '高精建材设备')}
        />
        <CustomCheckbox 
          label="测试设备制造厂" 
          checked={selectedManufacturers.includes('测试设备制造厂')}
          onChange={() => toggleFilter('manufacturer', '测试设备制造厂')}
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
