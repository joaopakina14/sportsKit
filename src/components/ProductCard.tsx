'use client';

import Image from 'next/image';
import styles from './ProductCard.module.css';
import { Product } from '@/lib/products';
import { useTranslations } from 'next-intl';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations('Index');

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={product.image} 
          alt={product.name} 
          width={300} 
          height={400} 
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.currency} {product.price.toFixed(2)}</p>
        <button className={styles.button}>{t('cta')}</button>
      </div>
    </div>
  );
}
