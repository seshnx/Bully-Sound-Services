import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>Bully Sound Services</h4>
          <p>Professional audio engineering services for your projects</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/booking">Book Now</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: contact@bullysoundservices.com</li>
            <li>Phone: (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Bully Sound Services. All rights reserved.</p>
      </div>
    </footer>
  )
}
