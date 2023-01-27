import CardTeam from '../CardTeam/CardTeam'
import './Team.css'

const Team = () => {
  return (
    <>
      <h3 className='section-heading'>Lead by experts, guided to success</h3>
      <section id='team'>
        <CardTeam src='/team/2.jpeg' name='John Smith' position='Team Lead'>
          John is the team lead at Quantis, with over 10 years of experience in
          web analytics and expertise in server-side tracking and Google
          Analytics 4.
        </CardTeam>
        <CardTeam
          src='/team/22.jpeg'
          name='Samantha Patel'
          position='Senior Data Analyst'
        >
          Samantha is responsible for advanced data analysis and custom
          dashboards. She leads a team of 10 people and also focuses on data
          visualization and insights generation.
        </CardTeam>
        <CardTeam
          src='/team/28.jpeg'
          name='Alex Kim'
          position='Senior Developer'
        >
          Alex expertise is in web technologies and responsible for maintaining
          and improving tracking code. He is focusing on technical aspects of
          web analytics and code optimization.
        </CardTeam>
        <CardTeam
          src='/team/17.jpeg'
          name='Rachel Lee'
          position='Account Manager'
        >
          Rachel is responsible for maintaining relationships with existing
          clients and helping them with Quantis' services. She works on client
          relationships and account management.
        </CardTeam>
      </section>
    </>
  )
}
export default Team
