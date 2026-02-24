'use client';

import { useState, use } from 'react';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const [mainImage, setMainImage] = useState(`https://picsum.photos/800/600?random=${id}`);
  const thumbnails = [
    `https://picsum.photos/800/600?random=${id}`,
    `https://picsum.photos/800/600?random=${id}1`,
    `https://picsum.photos/800/600?random=${id}2`,
    `https://picsum.photos/800/600?random=${id}3`
  ];

  const [currentTab, setCurrentTab] = useState<'overview' | 'specs' | 'downloads'>('overview');

  return (
    <div className="max-w-6xl mx-auto py-10 px-5">
      {/* 上半部分：左侧图集与右侧信息 */}
      <section className="flex flex-col md:flex-row gap-12 mb-16">
        {/* 左侧：图集 */}
        <div className="w-full md:w-[480px] shrink-0">
          <div className="h-[480px] bg-gray-50 mb-4 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden">
            <img src={mainImage} alt="产品大图" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {thumbnails.map((img, index) => (
              <div 
                key={index}
                className={`w-20 h-20 shrink-0 cursor-pointer border-2 rounded overflow-hidden transition-colors ${mainImage === img ? 'border-[#e3a348]' : 'border-transparent'}`}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt="缩略图" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：产品信息 */}
        <div className="flex-1 pt-5">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">高性能定制建筑材料 (ID: {id})</h1>
          <p className="text-gray-600 text-lg mb-8">厂家：高精建材设备有限公司</p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8 flex items-baseline gap-3">
            <span className="text-gray-600 text-lg">参考价格：</span>
            <span className="text-4xl text-[#e3a348] font-bold">¥ 9,999.00</span>
          </div>
          
          <div className="text-gray-600 leading-relaxed mb-10 text-lg">
            <p>适用于各大商业综合体、工业园区的标准建材，具备高强度、耐腐蚀等特性，通过 ISO9001 质量管理体系认证。</p>
          </div>

          <div className="flex gap-5">
            <button className="bg-[#e3a348] text-white border-none px-10 py-4 text-lg cursor-pointer rounded font-bold hover:bg-[#d19237] transition-colors">
              联系厂家
            </button>
            <button className="bg-white text-gray-800 border border-gray-300 px-10 py-4 text-lg cursor-pointer rounded hover:bg-gray-50 transition-colors">
              加入收藏
            </button>
          </div>
        </div>
      </section>

      {/* 下半部分：横向 Tabs 内容区 */}
      <section>
        <div className="flex border-b-2 border-gray-200 mb-8">
          <button 
            className={`px-10 py-4 text-lg cursor-pointer relative top-[2px] font-medium transition-colors ${currentTab === 'overview' ? 'text-[#e3a348] border-b-2 border-[#e3a348]' : 'text-gray-500 hover:text-gray-800 bg-transparent border-none'}`}
            onClick={() => setCurrentTab('overview')}
          >
            概述
          </button>
          <button 
            className={`px-10 py-4 text-lg cursor-pointer relative top-[2px] font-medium transition-colors ${currentTab === 'specs' ? 'text-[#e3a348] border-b-2 border-[#e3a348]' : 'text-gray-500 hover:text-gray-800 bg-transparent border-none'}`}
            onClick={() => setCurrentTab('specs')}
          >
            规格
          </button>
          <button 
            className={`px-10 py-4 text-lg cursor-pointer relative top-[2px] font-medium transition-colors ${currentTab === 'downloads' ? 'text-[#e3a348] border-b-2 border-[#e3a348]' : 'text-gray-500 hover:text-gray-800 bg-transparent border-none'}`}
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
