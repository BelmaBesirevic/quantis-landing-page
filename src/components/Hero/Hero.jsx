import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1 className='hero-heading'>Unlock hidden insights with Quantis</h1>
        <p className='hero-about'>
          We specialize in server-side tracking and Google Analytics 4, and provide advanced insights and optimization tools for your website,using the latest features of GA4.
        </p>
        <button className='hero-cta'>GET INSIGHTS NOW</button>
      </div>
      <div className='hero-image'>
        <img src='./graph.svg' alt='gaphic static growth' />
      </div>
    </div>
  )
}
export default Hero
