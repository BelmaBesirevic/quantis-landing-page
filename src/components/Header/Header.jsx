import { useEffect, useState } from 'react'
import Container from '../Container'
import './Header.css'

const Header = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 890px)').matches
  )
  console.log(matches)

  useEffect(() => {
    window
      .matchMedia('(min-width: 890px)')
      .addEventListener('change', (e) => setMatches(e.matches))
  }, [])

  return (
    <header className='header'>
      <Container>
        <div className='navbar'>
          <div className='logo'>
            <img
              src={matches ? '/logo-full.svg' : '/logo-q.svg'}
              alt='quantis logo'
            />
            <span className='logo-tagline'>Insight-driven decisions</span>
          </div>
          <nav id={matches ? 'clipped' : ''} className='navlinks'>
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
