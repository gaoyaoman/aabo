'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { getCategoryPath } from '@/lib/data';

export default function ProductDetail({ id }: { id: string }) {
  const searchParams = useSearchParams();
  const catId = searchParams.get('cat');
  const subId = searchParams.get('sub');

  const [mainImage, setMainImage] = useState(`https://picsum.photos/955/492?random=${id}`);
  const thumbnails = [
    `https://picsum.photos/955/492?random=${id}`,
    `https://picsum.photos/955/492?random=${id}1`,
    `https://picsum.photos/955/492?random=${id}2`,
    `https://picsum.photos/955/492?random=${id}3`,
    `https://picsum.photos/955/492?random=${id}4`,
    `https://picsum.photos/955/492?random=${id}5`,
    `https://picsum.photos/955/492?random=${id}6`,
    `https://picsum.photos/955/492?random=${id}7`,
    `https://picsum.photos/955/492?random=${id}8`,
    `https://picsum.photos/955/492?random=${id}9`,
    `https://picsum.photos/955/492?random=${id}10`,
  ];

  const [currentTab, setCurrentTab] = useState<'overview' | 'specs' | 'downloads'>('overview');
  const [isFavorited, setIsFavorited] = useState(false);

  const handlePrevImage = () => {
    const currentIndex = thumbnails.indexOf(mainImage);
    if (currentIndex > 0) {
      setMainImage(thumbnails[currentIndex - 1]);
    } else {
      setMainImage(thumbnails[thumbnails.length - 1]);
    }
  };

  const handleNextImage = () => {
    const currentIndex = thumbnails.indexOf(mainImage);
    if (currentIndex < thumbnails.length - 1) {
      setMainImage(thumbnails[currentIndex + 1]);
    } else {
      setMainImage(thumbnails[0]);
    }
  };

  let breadcrumbItems: { label: string; href?: string }[] = [{ label: 'PRODUCT', href: '/products' }];
  
  if (catId && subId) {
    const categoryPath = getCategoryPath(parseInt(subId));
    const parentName = categoryPath?.parent?.name || '未知分类';
    const subName = categoryPath?.sub?.name || '未知子分类';
    
    breadcrumbItems.push({ label: parentName, href: `/products?cat=${catId}` });
    breadcrumbItems.push({ label: subName, href: `/products/list?${searchParams.toString()}` });
  }
  
  breadcrumbItems.push({ label: `高性能定制建筑材料 (ID: ${id})` });

  return (
    <div className="w-full relative">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* 第一部分：商品标题 */}
      <h1 className="text-[20px] font-[700] tracking-[0px] leading-[24px] text-[rgba(29,33,41,1)] text-left align-top mb-[12px]">
        高性能定制建筑材料 (ID: {id})
      </h1>

      {/* 第二部分：左右结构 */}
      <section className="flex gap-[40px] mb-[64px]">
        {/* 左侧：图集 */}
        <div className="w-[955px] shrink-0 flex flex-col">
          <div className="w-[955px] h-[492px] rounded-[16px] overflow-hidden relative group">
            <img src={mainImage} alt="产品大图" className="w-full h-full object-cover" />
            
            {/* 左右切换器 */}
            <button 
              onClick={handlePrevImage}
              className="absolute left-[24px] top-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full bg-[rgba(255,255,255,0.6)] backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer border-none"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-[24px] top-1/2 -translate-y-1/2 w-[52px] h-[52px] rounded-full bg-[rgba(255,255,255,0.6)] backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer border-none"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
          <div className="mt-[16px] w-[955px] overflow-x-auto flex gap-[12px] pb-2 custom-scrollbar">
            {thumbnails.map((img, index) => (
              <div 
                key={index}
                className={`w-[86px] h-[86px] shrink-0 cursor-pointer rounded-[4px] bg-[rgba(229,230,235,1)] box-border overflow-hidden ${mainImage === img ? 'border-[2px] border-[rgba(227,163,72,1)]' : 'border-none'}`}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt="缩略图" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：产品信息 */}
        <div className="flex-1 flex flex-col">
          <img src="https://picsum.photos/160/116" alt="供应商Logo" className="w-[160px] h-[116px] object-cover mb-[16px]" />
          
          <div className="flex flex-col gap-[16px] mb-[16px]">
            <div className="flex">
              <span className="text-[16px] font-[400] tracking-[0px] leading-[24px] text-[rgba(29,33,41,1)]">厂家：</span>
              <span className="text-[16px] font-[400] tracking-[0px] leading-[24px] text-[rgba(79,89,104,1)]">高精建材设备有限公司</span>
            </div>
            <div className="flex">
              <span className="text-[16px] font-[400] tracking-[0px] leading-[24px] text-[rgba(29,33,41,1)]">参考价格：</span>
              <span className="text-[16px] font-[400] tracking-[0px] leading-[24px] text-[rgba(79,89,104,1)]">¥ 9,999.00</span>
            </div>
          </div>

          <div className="text-[16px] font-[400] tracking-[0px] leading-[21.82px] text-[rgba(79,89,104,1)] text-left align-top mb-[30px]">
            适用于各大商业综合体、工业园区的标准建材，具备高强度、耐腐蚀等特性，通过 ISO9001 质量管理体系认证。
          </div>

          <div className="w-full h-[1px] bg-[rgba(229,229,229,1)] mb-[16px]"></div>

          <div className="flex justify-between items-center mb-[16px]">
            <span className="text-[16px] font-[400] tracking-[0px] leading-[24px] text-[rgba(29,33,41,1)] text-left align-top">产品认证</span>
            <span className="text-[14px] font-[400] tracking-[0px] leading-[24px] text-[rgba(227,163,72,1)] text-left align-top cursor-pointer">查看详情</span>
          </div>

          <div className="flex gap-[16px] overflow-x-auto mb-[30px] pb-2 custom-scrollbar">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <img key={i} src={`https://picsum.photos/82/82?random=${i+100}`} alt="认证" className="w-[82px] h-[82px] shrink-0 object-cover" />
            ))}
          </div>

          <div className="flex gap-[16px] mt-auto">
            <button 
              onClick={() => setIsFavorited(!isFavorited)}
              className={`w-[188px] h-[48px] rounded-[8px] border-[1px] border-[rgba(227,163,72,1)] flex items-center justify-center cursor-pointer transition-colors ${isFavorited ? 'bg-[rgba(227,163,72,0.05)]' : 'bg-transparent'}`}
            >
              <span className="text-[20px] font-[400] tracking-[0px] leading-[24px] text-[rgba(227,163,72,1)] text-left align-top whitespace-nowrap">
                {isFavorited ? '已收藏' : '收藏'}
              </span>
            </button>
            <button className="h-[48px] rounded-[8px] bg-[rgba(227,163,72,1)] flex justify-center items-center py-[12px] px-[74px] cursor-pointer border-none">
              <span className="text-[20px] font-[400] tracking-[0px] leading-[24px] text-[rgba(255,255,255,1)] text-left whitespace-nowrap">编辑</span>
            </button>
            <button className="h-[48px] rounded-[8px] bg-[rgba(212,48,48,0.05)] border-[1px] border-[rgba(212,48,48,1)] flex justify-center items-center py-[12px] px-[74px] cursor-pointer">
              <span className="text-[20px] font-[400] tracking-[0px] leading-[24px] text-[rgba(212,48,48,1)] text-left whitespace-nowrap">删除</span>
            </button>
          </div>
        </div>
      </section>

      {/* 下半部分：横向 Tabs 内容区 */}
      <section>
        <div className="flex border-b-2 border-gray-200 mb-8">
          <button 
            className={`px-10 py-4 cursor-pointer relative top-[2px] transition-colors bg-transparent ${currentTab === 'overview' ? 'text-[16px] font-[700] tracking-[0px] leading-[21.82px] text-[rgba(227,163,72,1)] text-left align-top border-b-2 border-[rgba(227,163,72,1)]' : 'text-[16px] font-[600] tracking-[0px] leading-[21.82px] text-[rgba(135,144,155,1)] text-left align-top border-none'}`}
            onClick={() => setCurrentTab('overview')}
          >
            概述
          </button>
          <button 
            className={`px-10 py-4 cursor-pointer relative top-[2px] transition-colors bg-transparent ${currentTab === 'specs' ? 'text-[16px] font-[700] tracking-[0px] leading-[21.82px] text-[rgba(227,163,72,1)] text-left align-top border-b-2 border-[rgba(227,163,72,1)]' : 'text-[16px] font-[600] tracking-[0px] leading-[21.82px] text-[rgba(135,144,155,1)] text-left align-top border-none'}`}
            onClick={() => setCurrentTab('specs')}
          >
            规格
          </button>
          <button 
            className={`px-10 py-4 cursor-pointer relative top-[2px] transition-colors bg-transparent ${currentTab === 'downloads' ? 'text-[16px] font-[700] tracking-[0px] leading-[21.82px] text-[rgba(227,163,72,1)] text-left align-top border-b-2 border-[rgba(227,163,72,1)]' : 'text-[16px] font-[600] tracking-[0px] leading-[21.82px] text-[rgba(135,144,155,1)] text-left align-top border-none'}`}
            onClick={() => setCurrentTab('downloads')}
          >
            下载
          </button>
        </div>
        
        <div className="min-h-[400px] bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
          {currentTab === 'overview' && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">产品概述</h3>
              <p className="text-gray-600 leading-relaxed">这里是丰富的产品图文介绍区域，通常由富文本编辑器生成...</p>
            </div>
          )}
          
          {currentTab === 'specs' && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">技术规格参数</h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr><td className="border border-gray-200 p-4 bg-gray-50 w-[200px] font-bold text-gray-800">材质</td><td className="border border-gray-200 p-4 text-gray-600">高强度复合材料</td></tr>
                  <tr><td className="border border-gray-200 p-4 bg-gray-50 font-bold text-gray-800">尺寸规格</td><td className="border border-gray-200 p-4 text-gray-600">1200 x 600 x 20 mm</td></tr>
                  <tr><td className="border border-gray-200 p-4 bg-gray-50 font-bold text-gray-800">重量</td><td className="border border-gray-200 p-4 text-gray-600">15 kg / 件</td></tr>
                  <tr><td className="border border-gray-200 p-4 bg-gray-50 font-bold text-gray-800">防火等级</td><td className="border border-gray-200 p-4 text-gray-600">A级防火</td></tr>
                </tbody>
              </table>
            </div>
          )}
          
          {currentTab === 'downloads' && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">相关资源下载</h3>
              <ul className="list-none p-0 flex flex-col gap-4">
                <li className="border-b border-dashed border-gray-200 pb-4"><a href="#" className="text-[#4e416e] hover:text-[#e3a348] hover:underline flex items-center gap-2 text-lg">📄 产品使用及维护手册 (PDF)</a></li>
                <li className="border-b border-dashed border-gray-200 pb-4"><a href="#" className="text-[#4e416e] hover:text-[#e3a348] hover:underline flex items-center gap-2 text-lg">📐 2D CAD 标准图纸 (DWG)</a></li>
                <li className="border-b border-dashed border-gray-200 pb-4"><a href="#" className="text-[#4e416e] hover:text-[#e3a348] hover:underline flex items-center gap-2 text-lg">🧱 3D BIM 建筑模型 (RVT)</a></li>
                <li className="border-b border-dashed border-gray-200 pb-4"><a href="#" className="text-[#4e416e] hover:text-[#e3a348] hover:underline flex items-center gap-2 text-lg">📜 CEU 认证报告扫描件 (PDF)</a></li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
