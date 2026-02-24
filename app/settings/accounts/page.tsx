'use client';

import { useState } from 'react';

export default function AccountsSettings() {
  const [currentTab, setCurrentTab] = useState<'users' | 'manufacturers'>('users');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">账号管理</h2>
      
      {/* 上方：横向 Tabs */}
      <div className="flex border-b-2 border-gray-100 mb-6">
        <button 
          className={`px-6 py-3 text-base cursor-pointer relative top-[2px] font-medium transition-colors bg-transparent border-none ${currentTab === 'users' ? 'text-[#e3a348] border-b-2 border-[#e3a348]' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setCurrentTab('users')}
        >
          用户
        </button>
        <button 
          className={`px-6 py-3 text-base cursor-pointer relative top-[2px] font-medium transition-colors bg-transparent border-none ${currentTab === 'manufacturers' ? 'text-[#e3a348] border-b-2 border-[#e3a348]' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setCurrentTab('manufacturers')}
        >
          厂家
        </button>
      </div>

      {/* 下方：Table 展示内容 */}
      <div>
        {currentTab === 'users' && (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">ID</th>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">用户名</th>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">角色</th>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3 text-gray-600">1</td>
                <td className="border border-gray-200 p-3 text-gray-600">Client_001</td>
                <td className="border border-gray-200 p-3 text-gray-600">客户端</td>
                <td className="border border-gray-200 p-3 text-green-600">正常</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 text-gray-600">2</td>
                <td className="border border-gray-200 p-3 text-gray-600">Admin_Super</td>
                <td className="border border-gray-200 p-3 text-gray-600">管理员</td>
                <td className="border border-gray-200 p-3 text-green-600">正常</td>
              </tr>
            </tbody>
          </table>
        )}

        {currentTab === 'manufacturers' && (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">厂家ID</th>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">厂家名称</th>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">认证状态</th>
                <th className="border border-gray-200 p-3 bg-gray-50 text-gray-700 font-bold">联系人</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3 text-gray-600">M001</td>
                <td className="border border-gray-200 p-3 text-gray-600">测试设备制造厂</td>
                <td className="border border-gray-200 p-3 text-green-600">已认证</td>
                <td className="border border-gray-200 p-3 text-gray-600">张三</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 text-gray-600">M002</td>
                <td className="border border-gray-200 p-3 text-gray-600">高精建材有限公司</td>
                <td className="border border-gray-200 p-3 text-[#e3a348]">审核中</td>
                <td className="border border-gray-200 p-3 text-gray-600">李四</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
