import Link from 'next/link';

export default function ProductsPage() {
  const categories = [
    { id: 1, name: '建筑材料' },
    { id: 2, name: '机械设备' },
    { id: 3, name: '电子元器件' },
    { id: 4, name: '化工原料' },
  ];

  const subCategories = [
    { id: 11, name: '水泥', parent: 1 },
    { id: 12, name: '钢材', parent: 1 },
    { id: 13, name: '玻璃', parent: 1 },
    { id: 14, name: '木材', parent: 1 },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-5 flex gap-10">
      {/* Left List */}
      <div className="w-64 shrink-0">
        <h2 className="font-bold text-xl mb-6 border-b pb-2">一级分类</h2>
        <ul className="flex flex-col gap-2">
          {categories.map(cat => (
            <li key={cat.id}>
              <button className="w-full text-left px-4 py-3 rounded hover:bg-gray-100 transition-colors text-gray-700">
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Grid */}
      <div className="flex-1">
        <h2 className="font-bold text-xl mb-6 border-b pb-2">二级分类</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subCategories.map(sub => (
            <Link key={sub.id} href={`/products/category/${sub.id}`} className="block">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h3 className="font-bold text-gray-800">{sub.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
