import ClientHome from '@/components/home/ClientHome';
import AdminHome from '@/components/home/AdminHome';
import SupplierHome from '@/components/home/SupplierHome';
import { cookies } from 'next/headers';

export default async function HomePage() {
  const cookieStore = await cookies();
  const role = cookieStore.get('userRole')?.value || 'guest';

  return (
    <div className="w-full">
      {/* 沉浸式 Hero 区（高度 120px Header + 952px 背景 = 1072px） */}
      <div className="w-full h-[1072px] bg-slate-800 relative flex flex-col justify-center px-20">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Global B2B Sourcing <br/> Made Easy
          </h1>
          <p className="text-xl text-gray-200 mb-10">
            Connect with verified suppliers and manufacturers worldwide.
          </p>
          
          <div className="flex items-center bg-white rounded-full p-2 w-full max-w-2xl shadow-lg">
            <input 
              type="text" 
              placeholder="Search products, suppliers, or categories..." 
              className="flex-1 bg-transparent border-none outline-none px-6 text-gray-800 text-lg"
            />
            <button className="bg-[#e3a348] text-white px-8 py-3 rounded-full font-bold hover:bg-[#d19237] transition-colors">
              Search
            </button>
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
