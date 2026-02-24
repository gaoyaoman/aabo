'use client';

import { useState } from 'react';

export default function CategoriesSettings() {
  const [categoriesTree] = useState([
    { id: 1, name: '建筑材料', children: [{ id: 11, name: '水泥' }, { id: 12, name: '钢材' }] },
    { id: 2, name: '机械设备', children: [{ id: 21, name: '挖掘机' }] }
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">分类管理</h2>
      <div className="p-4 bg-gray-50 rounded border border-gray-100">
        <ul className="list-none p-0">
          {categoriesTree.map(node => (
            <li key={node.id} className="mb-2">
              <span className="font-bold cursor-pointer block mb-2 text-gray-800 hover:text-[#e3a348]">[-] {node.name}</span>
              {node.children && (
                <ul className="list-none pl-6">
                  {node.children.map(child => (
                    <li key={child.id} className="mb-1">
                      <span className="text-gray-600 block mb-1">|_ {child.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
