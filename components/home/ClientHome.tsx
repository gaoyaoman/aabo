'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClientHome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 1, name: '高性能定制建筑材料 1', supplier: '高精建材设备有限公司', price: '¥ 9,999.00', desc: '这是一款高性能的定制建筑材料，适用于各种复杂的建筑环境，提供卓越的耐久性和稳定性。' },
    { id: 2, name: '高性能定制建筑材料 2', supplier: '高精建材设备有限公司', price: '¥ 9,999.00', desc: '这是一款高性能的定制建筑材料，适用于各种复杂的建筑环境，提供卓越的耐久性和稳定性。' },
    { id: 3, name: '高性能定制建筑材料 3', supplier: '高精建材设备有限公司', price: '¥ 9,999.00', desc: '这是一款高性能的定制建筑材料，适用于各种复杂的建筑环境，提供卓越的耐久性和稳定性。' },
    { id: 4, name: '高性能定制建筑材料 4', supplier: '高精建材设备有限公司', price: '¥ 9,999.00', desc: '这是一款高性能的定制建筑材料，适用于各种复杂的建筑环境，提供卓越的耐久性和稳定性。' },
    { id: 5, name: '高性能定制建筑材料 5', supplier: '高精建材设备有限公司', price: '¥ 9,999.00', desc: '这是一款高性能的定制建筑材料，适用于各种复杂的建筑环境，提供卓越的耐久性和稳定性。' },
    { id: 6, name: '高性能定制建筑材料 6', supplier: '高精建材设备有限公司', price: '¥ 9,999.00', desc: '这是一款高性能的定制建筑材料，适用于各种复杂的建筑环境，提供卓越的耐久性和稳定性。' },
  ];

  const nextSlide = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Trending Products Title */}
      <div className="inline-flex flex-col self-center items-center">
        <h2 className="text-[36px] font-[400] tracking-[0px] leading-[49.1px] text-[rgba(78,65,110,1)] text-center align-top">
          TRENDING PRODUCTS
        </h2>
        <div className="flex flex-col gap-[5px] mt-[4px] w-full">
          <div className="h-[2px] w-full bg-[rgba(227,163,72,0.6)]"></div>
          <div className="h-[2px] w-full bg-[rgba(227,163,72,0.6)]"></div>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-between mt-[38px] mb-[38px] w-full">
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`w-[54px] h-[54px] rounded-full border-[2px] border-[rgba(184,184,184,1)] flex items-center justify-center text-[rgba(184,184,184,1)] transition-colors shrink-0 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'}`}
        >
          <ChevronLeft size={36} strokeWidth={1.5} />
        </button>

        <div className="flex gap-[20px] overflow-hidden w-[952px]">
          <div 
            className="flex gap-[20px] transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (304 + 20)}px)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-[304px] h-[460px] rounded-[4px] overflow-hidden flex flex-col bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow shrink-0">
                <Link href={`/products/${product.id}`} className="block relative shrink-0 w-[304px] h-[304px]">
                  <img src={`https://picsum.photos/304/304?random=${product.id + 10}`} alt="Product" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 w-full h-[33px] px-[12px] bg-[rgba(0,0,0,0.7)] backdrop-blur-[4px] flex items-center">
                    <span className="text-[14px] font-[400] tracking-[0px] leading-[20.27px] text-[rgba(255,255,255,1)] text-left align-top">
                      {product.price}
                    </span>
                  </div>
                </Link>
                
                <div className="flex-1 bg-[rgba(255,255,255,1)] p-[12px_12px_16px] flex flex-col gap-[8px]">
                  <h3 className="text-[16px] font-[400] tracking-[0px] leading-[21.82px] text-[rgba(29,33,41,1)] text-left align-top truncate">
                    {product.name}
                  </h3>
                  <p className="text-[12px] font-[400] tracking-[0px] leading-[16.37px] text-[rgba(79,89,104,1)] text-left align-top truncate">
                    {product.supplier}
                  </p>
                  <p className="text-[12px] font-[400] tracking-[0px] leading-[16.37px] text-[rgba(79,89,104,1)] text-left align-top line-clamp-2">
                    {product.desc}
                  </p>
                  
                  <div className="mt-auto flex gap-2 h-[32px]">
                    <Link href={`/products/${product.id}`} className="flex-1 border-[1px] border-[rgba(227,163,72,1)] rounded-[4px] bg-transparent flex items-center justify-center text-[14px] font-[400] tracking-[0px] leading-[19.1px] text-[rgba(227,163,72,1)] hover:bg-[rgba(227,163,72,0.05)] transition-colors">
                      查看详情
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentIndex >= products.length - 3}
          className={`w-[54px] h-[54px] rounded-full border-[2px] border-[rgba(184,184,184,1)] flex items-center justify-center text-[rgba(184,184,184,1)] transition-colors shrink-0 ${currentIndex >= products.length - 3 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 cursor-pointer'}`}
        >
          <ChevronRight size={36} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
