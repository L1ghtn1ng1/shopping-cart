import '../Styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
      <div className="shoppers">
        <h3>Shoppers</h3>
        <Link>About</Link>
        <Link>Carrers</Link>
        <Link>Blog</Link>
        <Link>Sale</Link>
      </div>
      <div className="support">
        <h3>Support</h3>
        <Link>Contact Us</Link>
        <Link>FAQs</Link>
        <Link>Privacy Policy</Link>
        <Link>Terms and Conditions</Link>
      </div>
      <div className="follow">
        <h3>Follow Us</h3>
        <Link>Facebook</Link>
        <Link>Twitter</Link>
        <Link>Instagram</Link>
        <Link>Pinterest</Link>
      </div>
    </div>
    
  )
}

export default Footer