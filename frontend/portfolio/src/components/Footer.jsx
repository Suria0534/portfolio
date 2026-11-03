import '../styles/footer.css';
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>
          © {new Date().getFullYear()} Suria Sultana. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
