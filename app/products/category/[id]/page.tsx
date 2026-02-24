import Link from 'next/link';
import { cookies } from 'next/headers';

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const role = cookieStore.get('userRole')?.value || 'guest';
  const canEdit = role === 'admin' || role === 'supplier';

  return (
    <div className="max-w-7xl mx-auto py-10 px-5 flex gap-10">
      {/* Left Filters */}
      <div className="w-64 shrink-0">
        <h2 className="font-bold text-xl mb-6 border-b pb-2">筛选</h2>
        
        <div className="mb-8">
          <h3 className="font-bold mb-3 text-gray-700">厂家</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#e3a348] focus:ring-[#e3a348]" />
              <span className="text-gray-600">高精建材设备</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#e3a348] focus:ring-[#e3a348]" />
              <span className="text-gray-600">测试设备制造厂</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-gray-700">内容类型</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#e3a348] focus:ring-[#e3a348]" />
              <span className="text-gray-600">现货</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#e3a348] focus:ring-[#e3a348]" />
              <span className="text-gray-600">定制</span>
            </label>
          </div>
        </div>
      </div>

      {/* Right Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h2 className="font-bold text-xl">产品列表 (分类 ID: {id})</h2>
          <span className="text-gray-500 text-sm">共找到 24 个结果</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow relative group">
              <Link href={`/products/${i}`} className="block">
                <div className="h-48 bg-gray-200 relative">
                  <img src={`https://picsum.photos/400/300?random=${i + 10}`} alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">高性能定制建筑材料 {i}</h3>
                  <p className="text-gray-500 text-sm mb-4">厂家：高精建材设备有限公司</p>
                  <div className="text-[#e3a348] font-bold text-xl">¥ 9,999.00</div>
                </div>
              </Link>
              
              {canEdit && (
                <button className="absolute top-3 right-3 bg-white/90 backdrop-blur text-gray-800 px-3 py-1 rounded text-sm font-bold shadow opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50">
                  编辑
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
