import './CardTeam.css'

const CardTeam = ({ src, name, position, children }) => {
  return (
    <div className='card-team'>
      <div className='team-header'>
        <div className='profile'>
          <img className='profile-pic' src={src} alt='team member profile' />
        </div>
        <h4 className='team-name'>{name}</h4>
        <h5 className='team-position'>{position}</h5>
      </div>
      <div className='team-body'>
        <p className='team-desc'>{children}</p>
      </div>
    </div>
  )
}
export default CardTeam
