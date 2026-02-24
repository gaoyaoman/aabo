export default function ClientHome() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 text-gray-900">Trending Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 relative">
              <img src={`https://picsum.photos/400/300?random=${i}`} alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">Industrial Equipment {i}</h3>
              <p className="text-gray-500 text-sm mb-4">High performance machinery for manufacturing.</p>
              <div className="text-[#e3a348] font-bold text-xl">¥ 9,999.00</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
