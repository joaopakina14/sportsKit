import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.branding}>
          <h3>sportsKit</h3>
          <p>The elite choice for professional sports apparel.</p>
        </div>
        <div className={styles.grid}>
          <div>
            <h4>Shipping</h4>
            <p>15-day worldwide delivery.</p>
            <p>Customs resend guarantee included.</p>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} sportsKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
