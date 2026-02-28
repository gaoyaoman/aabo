export const categories = [
  { id: 1, name: '建筑材料' },
  { id: 2, name: '机械设备' },
  { id: 3, name: '电子元器件' },
  { id: 4, name: '化工原料' },
];

export const subCategories = [
  { id: 11, name: '水泥', parent: 1 },
  { id: 12, name: '钢材', parent: 1 },
  { id: 13, name: '玻璃', parent: 1 },
  { id: 14, name: '木材', parent: 1 },
  { id: 15, name: '沙石', parent: 1 },
  { id: 16, name: '涂料', parent: 1 },
];

export function getCategoryPath(subCategoryId: number) {
  const sub = subCategories.find(s => s.id === subCategoryId);
  if (!sub) return null;
  const parent = categories.find(c => c.id === sub.parent);
  return { parent, sub };
}
