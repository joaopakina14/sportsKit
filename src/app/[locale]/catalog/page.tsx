import CatalogBrowser from '@/components/CatalogBrowser';

async function getInventory() {
  const res = await fetch(`http://localhost:3001/api/admin/inventory`, { cache: 'no-store' });
  if (!res.ok) return { products: [] };
  return res.json();
}

export default async function CatalogPage() {
  const { products } = await getInventory();

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0c' }}>
      <CatalogBrowser initialProducts={products} />
    </main>
  );
}
