export default function SupplierHome() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10 text-gray-900">Supplier Portal</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="text-gray-500 mb-2">Active Products</div>
          <div className="text-4xl font-bold">45</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="text-gray-500 mb-2">New Inquiries</div>
          <div className="text-4xl font-bold text-[#e3a348]">12</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="text-gray-500 mb-2">Profile Views</div>
          <div className="text-4xl font-bold">892</div>
        </div>
      </div>
    </div>
  );
}
