import ProductDetail from '@/components/product/ProductDetail';

export default async function ManufacturerProductDetailPage({ params }: { params: Promise<{ id: string, productId: string }> }) {
  const { productId } = await params;
  return <ProductDetail id={productId} />;
}
