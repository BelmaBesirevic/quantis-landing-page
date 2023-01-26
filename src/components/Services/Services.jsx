import './Services.css'
import { MdDataExploration } from 'react-icons/md'
import { RiCustomerServiceFill } from 'react-icons/ri'
import { FaHandsHelping } from 'react-icons/fa'
import { RxDimensions } from 'react-icons/rx'

const Services = () => {
  return (
    <section id='services' className='services'>
      <h3 style={{ color: '#fff' }} className='section-heading'>
        Transforming data into action
      </h3>
      <div className='services-items'>
        {/* 1 */}
        <div className='item'>
          <MdDataExploration className='item-icon' />
          <h4 className='item-heading'>Proven track record</h4>
          <p className='item-desc'>
            Over hundred clients in various industries
          </p>
        </div>
        {/* 2 */}
        <div className='item'>
          <RiCustomerServiceFill className='item-icon' />
          <h4 className='item-heading'>Dedicated customer service</h4>
          <p className='item-desc'>Empowering you through guidance</p>
        </div>
        {/* 3 */}
        <div className='item'>
          <FaHandsHelping className='item-icon' />
          <h4 className='item-heading'>Team guidence</h4>
          <p className='item-desc'>Expert results for measurable success</p>
        </div>
        {/* 4 */}
        <div className='item'>
          <RxDimensions className='item-icon' />
          <h4 className='item-heading'>Tailored solutions</h4>
          <p className='item-desc'>
            Client-centered strategy for the growth outcome
          </p>
        </div>
      </div>
    </section>
  )
}
export default Services
