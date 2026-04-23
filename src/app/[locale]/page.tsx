import {useTranslations} from 'next-intl';
import styles from './page.module.css';

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
    </main>
  );
}
