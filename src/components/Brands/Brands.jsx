import './Brands.css'

const Brands = () => {
  return (
    <section className='brands'>
       <h3  className='section-heading'>Leading brands trust us</h3>
      <div className='brands-container'>
      <img className="brand-logo" src="./brands/brand-1.svg" alt="company logo" />
        <img className="brand-logo" src="./brands/brand-2.svg" alt="company logo" />
        <img className="brand-logo" src="./brands/brand-3.svg" alt="company logo" />
        <img className="brand-logo" src="./brands/brand-4.svg" alt="company logo" />
        <img className="brand-logo" src="./brands/brand-5.svg" alt="company logo" />
      </div>
      <div className='brands-container'>
      <img className="brand-logo" src="./brands/brand-6.svg" alt="company logo" />
        <img className="brand-logo" src="./brands/brand-7.svg" alt="company logo" />
        <img className="brand-logo" src="./brands/brand-8.svg" alt="company logo" />
        <img className="brand-logo" src="./brands/brand-9.svg" alt="company logo" />
        <img className="brand-logo" src="./brands/brand-10.svg" alt="company logo" />
      </div>
    </section>
  )
}
export default Brands