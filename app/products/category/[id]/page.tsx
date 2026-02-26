import Link from 'next/link';
import { cookies } from 'next/headers';
import { Edit, Trash2 } from 'lucide-react';
import CheckboxGroup from '@/components/ui/CheckboxGroup';
import CustomCheckbox from '@/components/ui/CustomCheckbox';

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const role = cookieStore.get('userRole')?.value || 'guest';
  const canEdit = role === 'admin' || role === 'supplier';

  return (
    <div className="w-full flex gap-[20px]">
      {/* Left Filters */}
      <div className="w-[304px] bg-[#FFFFFF] rounded-[12px] py-[24px] px-[20px] shrink-0">
        <CheckboxGroup title="厂家">
          <CustomCheckbox label="高精建材设备" checked={false} />
          <CustomCheckbox label="测试设备制造厂" checked={false} />
        </CheckboxGroup>

        <CheckboxGroup title="内容类型">
          <CustomCheckbox label="现货" checked={false} />
          <CustomCheckbox label="定制" checked={false} />
        </CheckboxGroup>
      </div>

      {/* Right Product Grid */}
      <div className="flex-1">
        <div className="flex flex-wrap gap-[20px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="w-[304px] h-[460px] rounded-[4px] overflow-hidden flex flex-col bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Link href={`/products/${i}`} className="block relative shrink-0 w-[304px] h-[304px]">
                <img src={`https://picsum.photos/304/304?random=${i + 10}`} alt="Product" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-[33px] px-[12px] bg-[rgba(0,0,0,0.7)] backdrop-blur-[4px] flex items-center">
                  <span className="text-[14px] font-[400] tracking-[0px] leading-[20.27px] text-[rgba(255,255,255,1)] text-left align-top">
                    ¥ 9,999.00
                  </span>
                </div>
              </Link>
              
              <div className="flex-1 bg-[rgba(255,255,255,1)] p-[12px_12px_16px] flex flex-col gap-[8px]">
                <h3 className="text-[16px] font-[400] tracking-[0px] leading-[21.82px] text-[rgba(29,33,41,1)] text-left align-top truncate">
                  高性能定制建筑材料 {i}
                </h3>
                <p className="text-[12px] font-[400] tracking-[0px] leading-[16.37px] text-[rgba(79,89,104,1)] text-left align-top truncate">
                  高精建材设备有限公司
                </p>
                <p className="text-[12px] font-[400] tracking-[0px] leading-[16.37px] text-[rgba(79,89,104,1)] text-left align-top line-clamp-2">
                  这是一款高性能的定制建筑材料，适用于各种复杂的建筑环境，提供卓越的耐久性和稳定性。
                </p>
                
                <div className="mt-auto flex gap-2 h-[32px]">
                  <Link href={`/products/${i}`} className="flex-1 border-[1px] border-[rgba(227,163,72,1)] rounded-[4px] bg-transparent flex items-center justify-center text-[14px] font-[400] tracking-[0px] leading-[19.1px] text-[rgba(227,163,72,1)] hover:bg-[rgba(227,163,72,0.05)] transition-colors">
                    查看详情
                  </Link>
                  {canEdit && (
                    <>
                      <button className="w-[32px] h-[32px] border-[1px] border-[rgba(227,227,227,1)] rounded-[4px] bg-transparent flex items-center justify-center text-black hover:bg-gray-50 transition-colors cursor-pointer">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="w-[32px] h-[32px] border-[1px] border-[rgba(227,227,227,1)] rounded-[4px] bg-transparent flex items-center justify-center text-black hover:bg-gray-50 transition-colors cursor-pointer">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
