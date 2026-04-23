'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import ProductCard from './ProductCard';
import styles from './CatalogBrowser.module.css';

interface Product {
  id: string;
  name: string;
  image: string;
  url: string;
  category: string;
  country: string;
  type: string;
}

interface CatalogBrowserProps {
  initialProducts: Product[];
}

export default function CatalogBrowser({ initialProducts }: CatalogBrowserProps) {
  const t = useTranslations('Index.catalog');
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesType = filterType === 'All' || 
                         (filterType === 'Clubs' && p.type === 'Club') ||
                         (filterType === 'National' && p.type === 'National Team');
      return matchesSearch && matchesType;
    });
  }, [initialProducts, search, filterType]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{t('title')}</h1>
        
        <div className={styles.controls}>
          <input 
            type="text" 
            placeholder={t('searchPlaceholder')}
            className={styles.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          
          <div className={styles.filters}>
            <button 
              className={`${styles.filterBtn} ${filterType === 'All' ? styles.active : ''}`}
              onClick={() => setFilterType('All')}
            >
              {t('filterAll')}
            </button>
            <button 
              className={`${styles.filterBtn} ${filterType === 'Clubs' ? styles.active : ''}`}
              onClick={() => setFilterType('Clubs')}
            >
              {t('filterClubs')}
            </button>
            <button 
              className={`${styles.filterBtn} ${filterType === 'National' ? styles.active : ''}`}
              onClick={() => setFilterType('National')}
            >
              {t('filterNational')}
            </button>
          </div>
        </div>
      </header>

      {filteredProducts.length > 0 ? (
        <div className={styles.productGrid}>
          {filteredProducts.slice(0, 100).map((product) => (
             <div key={product.id} className={styles.cardWrapper}>
                <ProductCard product={{
                    id: product.id,
                    name: product.name,
                    description: `${product.category} - ${product.country}`,
                    price: 85.00, // Default price as inventory doesn't have it
                    currency: 'EUR',
                    image: product.image,
                    colors: [],
                    sizes: ['S', 'M', 'L', 'XL']
                }} />
             </div>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>{t('noResults')}</p>
        </div>
      )}
      
      {filteredProducts.length > 100 && (
        <div className={styles.footer}>
          <p>Showing first 100 of {filteredProducts.length} results.</p>
        </div>
      )}
    </div>
  );
}
