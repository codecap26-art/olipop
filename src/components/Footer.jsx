import React from 'react';
import { TwitterIcon, InstagramIcon, FacebookIcon, TikTokIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">OLIPOP</div>
            <p className="footer-brand-desc">
              A modern functional soda brand inspired by classic flavors but made with better
              ingredients. Better soda, better you.
            </p>
            <div className="footer-social" style={{ marginTop: 24 }}>
              <a href="#" className="footer-social-link" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" className="footer-social-link" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className="footer-social-link" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" className="footer-social-link" aria-label="TikTok"><TikTokIcon /></a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-col-links">
              <a href="#" className="footer-link">About</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Press</a>
              <a href="#" className="footer-link">Blog</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Support</div>
            <div className="footer-col-links">
              <a href="#" className="footer-link">Contact</a>
              <a href="#" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Shipping</a>
              <a href="#" className="footer-link">Returns</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Legal</div>
            <div className="footer-col-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Cookie Policy</a>
              <a href="#" className="footer-link">Accessibility</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Olipop, Inc. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy</a>
            <a href="#" className="footer-bottom-link">Terms</a>
            <a href="#" className="footer-bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
