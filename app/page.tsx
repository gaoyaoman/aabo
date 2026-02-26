import ClientHome from '@/components/home/ClientHome';
import AdminHome from '@/components/home/AdminHome';
import SupplierHome from '@/components/home/SupplierHome';
import { cookies } from 'next/headers';

export default async function HomePage() {
  const cookieStore = await cookies();
  const role = cookieStore.get('userRole')?.value || 'guest';

  return (
    <div className="w-full">
      {/* 沉浸式 Hero 区 */}
      <div className="w-full h-[1072px] relative flex flex-col">
        {/* Background image */}
        <div className="absolute top-[134px] left-0 right-0 bottom-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        
        {/* 顶部线性渐变遮罩层 */}
        <div className="absolute top-[134px] left-0 w-full h-[226px] bg-gradient-to-b from-[#000000] to-transparent z-10"></div>
        
        <div className="relative z-20 w-full h-full pt-[254px]">
          <div className="pl-[148px]">
            <h1 className="text-[64px] font-[500] text-white leading-[85px] mb-[40px]">
              From Discovery to Delivery<br/>
              The Future of Procurement is Here
            </h1>
            
            <div className="flex items-center bg-white rounded-full p-2 w-[770px] shadow-lg">
              <input 
                type="text" 
                placeholder="Search products, suppliers, or categories..." 
                className="flex-1 bg-transparent border-none outline-none px-6 text-gray-800 text-lg"
              />
              <button className="bg-[#e3a348] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d19237] transition-colors cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Role-specific content */}
      <div className="max-w-7xl mx-auto py-20 px-5">
        {role === 'admin' && <AdminHome />}
        {role === 'supplier' && <SupplierHome />}
        {(role === 'client' || role === 'guest') && <ClientHome />}
      </div>
    </div>
  );
}
