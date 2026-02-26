'use client';

import { useState } from 'react';

export default function SystemSettings() {
  const [currentTab, setCurrentTab] = useState<'certifications'>('certifications');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">系统设置</h2>
      
      {/* 上方：横向 Tabs */}
      <div className="flex border-b-2 border-gray-100 mb-6">
        <button 
          className={`px-6 py-3 text-base cursor-pointer relative top-[2px] font-medium transition-colors bg-transparent border-none ${currentTab === 'certifications' ? 'text-[#e3a348] border-b-2 border-[#e3a348]' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setCurrentTab('certifications')}
        >
          相关认证
        </button>
      </div>

      {/* 下方：Table 展示内容 */}
      <div>
        {currentTab === 'certifications' && (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">认证机构</th>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">认证logo</th>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3 text-gray-600 align-middle">ISO 9001</td>
                <td className="border border-gray-200 p-3 text-gray-600 align-middle">
                  <div className="w-12 h-12 bg-gray-100 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/48/48?random=101" alt="ISO Logo" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="border border-gray-200 p-3 text-gray-600 align-middle">
                  <button className="text-blue-500 hover:text-blue-700 hover:underline mr-4 cursor-pointer">编辑</button>
                  <button className="text-red-500 hover:text-red-700 hover:underline cursor-pointer">删除</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 text-gray-600 align-middle">CE 认证</td>
                <td className="border border-gray-200 p-3 text-gray-600 align-middle">
                  <div className="w-12 h-12 bg-gray-100 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/48/48?random=102" alt="CE Logo" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="border border-gray-200 p-3 text-gray-600 align-middle">
                  <button className="text-blue-500 hover:text-blue-700 hover:underline mr-4 cursor-pointer">编辑</button>
                  <button className="text-red-500 hover:text-red-700 hover:underline cursor-pointer">删除</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 text-gray-600 align-middle">RoHS 环保认证</td>
                <td className="border border-gray-200 p-3 text-gray-600 align-middle">
                  <div className="w-12 h-12 bg-gray-100 rounded border border-gray-200 flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/48/48?random=103" alt="RoHS Logo" className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="border border-gray-200 p-3 text-gray-600 align-middle">
                  <button className="text-blue-500 hover:text-blue-700 hover:underline mr-4 cursor-pointer">编辑</button>
                  <button className="text-red-500 hover:text-red-700 hover:underline cursor-pointer">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
