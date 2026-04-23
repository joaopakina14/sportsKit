import {useTranslations} from 'next-intl';
import styles from './page.module.css';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const t = useTranslations('Index');

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.glassCard}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.deliveryInfo}>📦 {t('delivery')}</p>
          <p className={styles.guaranteeInfo}>🛡️ {t('guarantee')}</p>
          <button className={styles.cta}>{t('cta')}</button>
        </div>
      </section>

      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Featured Collections</h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
