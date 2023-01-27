import Container from '../Container'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <div className="footer-header">
          <img src="logo-full.svg" alt="quantis logo" />
          <div className="footer-newsletter">
            <span>Subscribe to our newsletter & stay updated</span>
            <div className="footer-input">
            <input type="email" placeholder='Your email' />
            <button>SIGN UP</button>
            </div>
          </div>
        </div>
        <div className="footer-links">
          {/* Company */}
          <div className='links-container'>
            <p className='links-heading'>Company</p>
            <ul className="links">
              <li className="link"><a href="#about">About</a></li>
              <li className="link"><a href="#services">Services</a></li>
              <li className="link"><a href="#clients">Clients</a></li>
              <li className="link"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div className='links-container'>
            <p className='links-heading'>Resources</p>
            <ul className="links">
              <li className="link"><a href="#">Docs</a></li>
              <li className="link"><a href="#">Support</a></li>
              <li className="link"><a href="#">GPDR Terms</a></li>
              <li className="link"><a href="#">Google Analytics</a></li>
            </ul>
          </div>
          {/* Pricing */}
          <div className='links-container'>
            <p className='links-heading'>Pricing</p>
            <ul className="links">
              <li className="link"><a href="#">Pricing overview</a></li>
              <li className="link"><a href="#">Essential Analytics</a></li>
              <li className="link"><a href="#">Advanced Analytics</a></li>
              <li className="link"><a href="#">Expert Analytics</a></li>
            </ul>
          </div>
          {/* Projects */}
          <div className='links-container'>
            <p className='links-heading'>Projects</p>
            <ul className="links">
              <li className="link"><a href="#">Latest Projects</a></li>
              <li className="link"><a href="#">Parterships</a></li>
              <li className="link"><a href="#">Awards</a></li>
              <li className="link"><a href="#">Analytics Conference</a></li>
            </ul>
          </div>
          {/* Social */}
          <div className='links-container'>
            <p className='links-heading'>Social</p>
            <ul className="links">
              <li className="link"><a href="#">Linkedin</a></li>
              <li className="link"><a href="#">Twitter</a></li>
              <li className="link"><a href="#">Facebook</a></li>
              <li className="link"><a href="#">Google +</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="copyright-content">
              <p>Copyright &#169; 2023 | QUANTIS | All Rights Reserved</p>
              <p>
                <a href="#">Copyright Disclaimer </a>
                |  <a href="#">GDPR Privacy Policy</a>
              </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
export default Footer