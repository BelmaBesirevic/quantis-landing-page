import Card from '../Card/Card'
import './Plans.css'

const Plans = () => {
  return (
    <section className='plans'>
      <Card title='Essential Analytics' price='350'>
        <li>Installation and setup of web analytics tracking tools</li>
        <li>Basic reports and analysis</li>
        <li>Introduction to web analytics and data interpretation</li>
        <li>Email and phone support</li>
      </Card>
      <Card title='Advanced Analytics' price='670'>
        <li>Advanced reports and analysis</li>
        <li>Regular reporting and consultation</li>
        <li>Advanced metrics and custom dimension tracking</li>
        <li>Integration with external data </li>
        <li>Email and phone support</li>
      </Card>
      <Card title='Expert Analytics' price='1280'>
          <li>Comprehensive reports and analysis</li>
          <li>Custom dashboards and automated reports</li>
          <li>Advanced machine learning models</li>
          <li>One-on-one consultation </li>
          <li>Email and phone support</li>
      </Card>
    </section>
  )
}
export default Plans
