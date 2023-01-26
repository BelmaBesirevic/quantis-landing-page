import './Card.css'

const Card = ({ title, price, children }) => {
  return (
    <div className='card'>
      <div  className='card-header'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-price'>
          $<span className='price'>{price}</span> / Project
        </p>
      </div>
      <div className='card-body'>
        <ul className='card-desc'>{children}</ul>
      </div>
      <button className='cta-plan'>Select package</button>
    </div>
  )
}
export default Card
