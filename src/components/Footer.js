function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        <p className="footer-copy">
          &copy; <span>2026</span> All rights reserved.
        </p>
      </div>
      <div className="slogan">
        <h2 className="footer-title">Go Wild Travel</h2>
        <p className="footer-text">Your Next Adventure Starts Here</p>
      </div>

      <div className="social-media">
        <h3 className="follow-us">Follow Us</h3>

        <div className="social-media-btns">
          <a href="#" className="social-btn">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#" className="social-btn">
            <i className="fa-brands fa-square-facebook"></i>
          </a>

          <a href="#" className="social-btn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
