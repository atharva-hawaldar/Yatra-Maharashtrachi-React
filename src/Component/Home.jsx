import React, { useEffect } from 'react';
import styles from './Home.module.css'; // ✅ Updated import
import { useNavigate, useLocation } from 'react-router-dom';
import main from './main.jpeg';
import Beaches from './Beaches.jpeg';
import Fort from './Fort.jpeg';
import Caves from './Caves.jpeg';
import Temple from './Temple.jpeg';
import Wildlife from './Wildlife.jpeg';

const categories = [
  {
    label: 'FORT',
    image: Fort,
    link: '/forts'
  },
  {
    label: 'CAVES',
    image: Caves,
    link: '/caves'
  },
  {
    label: 'TEMPLE',
    image: Temple,
    link: '/temples'
  },
  {
    label: 'WILD LIFE',
    image: Wildlife,
    link: '/wildlife'
  },
  {
    label: 'BEACHES',
    image: Beaches,
    link: '/beaches'
  },
];

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Scroll to the section when coming from another page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={styles.homeWrapper}>
    <div className={styles.homepage}>
      {/* Header */}
      <header className={styles.header} id="home">
        <img src={main} alt="Yatra Maharashtra" className={styles['header-img']} />
      </header>

      {/* Explore Section */}
      <section className={styles.explore}>
        <h2>Explore Maharashtra</h2>
        <div className={styles.underline}></div>

        <div className={styles['fixed-category-layout']}>
          {/* Row 1 */}
          <div className={styles['exact-row']}>
            <div className={styles['category-card']} onClick={() => navigate(categories[0].link)}>
              <img src={categories[0].image} alt="FORT" className={styles['category-image']} />
              <div className={styles['category-overlay']}>
                
              </div>
            </div>
            <div className={styles['category-card']} onClick={() => navigate(categories[1].link)}>
              <img src={categories[1].image} alt="CAVES" className={styles['category-image']} />
              <div className={styles['category-overlay']}>
               
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles['exact-row']}>
            <div className={styles['category-card']} onClick={() => navigate(categories[2].link)}>
              <img src={categories[2].image} alt="TEMPLE" className={styles['category-image']} />
              <div className={styles['category-overlay']}>
               
              </div>
            </div>
            <div className={styles['category-card']} onClick={() => navigate(categories[3].link)}>
              <img src={categories[3].image} alt="WILD LIFE" className={styles['category-image']} />
              <div className={styles['category-overlay']}>
                
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles['center-beach-row']}>
            <div className={`${styles['category-card']} ${styles['beach-card']}`} onClick={() => navigate(categories[4].link)}>
              <img src={categories[4].image} alt="BEACHES" className={styles['category-image']} />
              <div className={styles['category-overlay']}>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about} id="about">
        <h3>ABOUT US</h3>
        <p>
          Welcome to Yatra Maharashtrachi – a journey through the heart of Maharashtra!<br /><br />
          We created this platform to showcase the rich cultural heritage, ancient history, and natural beauty of Maharashtra. From majestic forts and sacred temples, to mystical caves, exotic wildlife, and serene beaches – Yatra Maharashtrachi is your one-stop guide to explore it all.
        </p>
        <p>
          Our mission is to help travelers, explorers, and culture lovers discover hidden gems, plan meaningful trips, and connect with the essence of Maharashtrian pride and tradition.
        </p>
        <p>
          Whether you're a history buff, nature lover, spiritual seeker, or weekend adventurer – there's something here for everyone.
        </p>
        <p>
          Let’s travel together across the land of Shivaji Maharaj, ancient dynasties, spiritual energy, and natural wonders.
          <br />Start your yatra today – with Yatra Maharashtrachi!
        </p>
      </section>

      {/* Help & Support Section */}
      <section className={styles.support} id="help">
        <h2 className={styles['support-title']}>HELP & SUPPORT</h2>
        <div className={styles['support-split']}>
          <div className={styles['support-left']}>
            <h3>Welcome to the Help & Support center for<br />Yatra Maharashtrachi!</h3>
            <p>🛍 <strong>Getting Started</strong><br />
              Learn how to explore Maharashtra's historic forts, spiritual temples, hidden caves, stunning beaches, and vibrant wildlife zones.</p>
            <p>❓ <strong>Frequently Asked Questions</strong></p>
            <ul>
              <li>How do I use the website to plan trips?</li>
              <li>Is the information accurate and updated?</li>
              <li>Can I share my own travel experiences?</li>
            </ul>
          </div>
          <div className={styles['vertical-line']}></div>
          <div className={styles['support-right']}>
            <p>📩 <strong>Contact Us</strong><br />
              Need help? Email us at <em>support@yatramaharashtrachi.com</em><br />
              We usually reply within 24–48 hours.</p>

            <p>🚨 <strong>Report an Issue</strong><br />
              Found a mistake or broken link? Let us know!</p>

            <p>💬 <strong>Feedback & Suggestions</strong><br />
              We'd love to hear your thoughts! <a href="#">[Submit Feedback]</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles['footer-logo-section']}>
          <h2>🛍 Yatra Maharashtrachi</h2>
          <p>A journey through the heart of Maharashtra!</p>
        </div>

        <div className={styles['footer-links-section']}>
          <h3>Quick Links!</h3>
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#help">Help</a>
        </div>

        <div className={styles['footer-contact-section']}>
          <h3>Contact Us</h3>
          <p>📞 +91 73797-XXX-243</p>
          <p>📧 tour@yatramaharashtrachi.com</p>
          <p>📱 @yatra_maharashtrachi</p>
        </div>

        <div className={styles['footer-bottom']}>
          © 2025 Yatra Maharashtrachi | All Rights Reserved
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Home;