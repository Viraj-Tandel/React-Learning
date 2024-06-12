import "@fortawesome/fontawesome-free/css/all.min.css";
import { APP_STORE_URL, LOGO_URL, PLAY_STORE_URL } from "../utils/constants";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={LOGO_URL} alt="Zomato" className="footer-logo" />
        <div className="footer-sections">
          <div className="footer-section">
            <h3>ABOUT ZOMATO</h3>
            <ul>
              <li>
                <a href="#">Who We Are</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Work With Us</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Report Fraud</a>
              </li>
              <li>
                <a href="#">Press Kit</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>ZOMAVERSE</h3>
            <ul>
              <li>
                <a href="#">Zomato</a>
              </li>
              <li>
                <a href="#">Blinkit</a>
              </li>
              <li>
                <a href="#">Feeding India</a>
              </li>
              <li>
                <a href="#">Hyperpure</a>
              </li>
              <li>
                <a href="#">Zomaland</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>FOR RESTAURANTS</h3>
            <ul>
              <li>
                <a href="#">Partner With Us</a>
              </li>
              <li>
                <a href="#">Apps For You</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>LEARN MORE</h3>
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-controls">
          <div className="footer-country">
            <select>
              <option>India</option>
              {/* Add more options here */}
            </select>
            <select>
              <option>English</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="footer-social-links">
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="footer-app-links">
            <a href="#">
              <img src={APP_STORE_URL} alt="App Store" />
            </a>
            <a href="#">
              <img src={PLAY_STORE_URL} alt="Google Play" />
            </a>
          </div>
        </div>
        <p className="footer-note">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
