import "@fortawesome/fontawesome-free/css/all.min.css";
import { APP_STORE_URL, LOGO_URL, PLAY_STORE_URL } from "../utils/constants";

const FooterComponent = () => {
  return (
    <footer className="footer bg-[#f8f8f8] py-[40px] text-center">
      <div className="footer-content max-w-[1200px] my-0 mx-auto py-0 px-[20px]">
        <img
          src={LOGO_URL}
          alt="Zomato"
          className="footer-logo mb-5 h-[50px]"
        />
        <div className="footer-sections flex justify-between flex-wrap mb-5 text-left">
          <div className="footer-section flex-1 min-w-[150px] m-[10px]">
            <h3 className="text-[16px] mb-[10px] text-[#333]">ABOUT ZOMATO</h3>
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
          <div className="footer-section flex-1 min-w-[150px] m-[10px]">
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
          <div className="footer-section flex-1 min-w-[150px] m-[10px]">
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
          <div className="footer-section flex-1 min-w-[150px] m-[10px]">
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
        <div className="footer-controls flex justify-between align-middle mb-5">
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
