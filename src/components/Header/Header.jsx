import { useEffect, useState } from 'react'
import Container from '../Container'
import { AiOutlineMenu } from 'react-icons/ai'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 920px)').matches
  )

  useEffect(() => {
    window
      .matchMedia('(min-width: 920px)')
      .addEventListener('change', (e) => setMatches(e.matches))
  }, [])

  useEffect(() => {
    const query = window.matchMedia('(max-width: 590px)')
    setIsMobile(query.matches)
    query.addEventListener('change', (e) => setIsMobile(e.matches))
  }, [])

  return (
    <header className='header'>
      <Container>
        <div className='navbar'>
          <div className='logo'>
            <img
              src={isMobile ? '/logo-full.svg' : '/logo-q.svg'}
              alt='quantis logo'
            />
            <span className='logo-tagline'>Insight-driven decisions</span>
          </div>
          {isMobile && <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} style={{fontSize: "30px", margin: "30px"}} className="menu-icon"/>}
          <nav
            id={matches ? 'clipped' : ''}
            className={`navlinks ${isOpen ? 'open' : 'close'}`}
          >
            <li className='navlink'>
              <a href='#about'>About</a>
            </li>
            <li className='navlink'>
              <a href='#services'>Services</a>
            </li>
            <li className='navlink'>
              <a href='#testimonials'>Testimonials</a>
            </li>
            <li className='navlink'>
              <a href='#team'>Team</a>
            </li>
            <li className='navlink'>
              <a href='#contact' className='cta-contact'>
                Contact
              </a>
            </li>
          </nav>
        </div>
      </Container>
    </header>
  )
}
export default Header
