'use client';

import {Link} from '@/i18n/routing';
import {useParams} from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const params = useParams();
  const currentLocale = params.locale as string;

  const locales = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          sports<span>Kit</span>
        </Link>
        
        <div className={styles.links}>
          <Link href="/">Shop</Link>
          <Link href="/">Collections</Link>
          <Link href="/">Support</Link>
        </div>

        <div className={styles.languageSwitcher}>
          {locales.map((loc) => (
            <Link 
              key={loc.code} 
              href="/" 
              locale={loc.code}
              className={currentLocale === loc.code ? styles.activeLocale : ''}
            >
              {loc.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
