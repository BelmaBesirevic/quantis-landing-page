import './Contact.css'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaGooglePlusSquare,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact-left'>
        <h3 className='contact-heading'>CONTACT INFORMATION</h3>
        <p>
          Please complete the form and a member of our team will reach out to
          you within the next 24 hours.
        </p>
        <div className='contact-details'>
          <div className='contact-phone'>
            <BsTelephoneFill /> <span>+123 456 789 1011</span>
          </div>
          <div className='contact-email'>
            <IoMdMail />
            <span>contact@quantis.com</span>
          </div>
          <div className='contact-address'>
            <ImLocation />
            <span>Riverside Retail Park 11</span>
          </div>
        </div>
        <div className='contact-social'>
          <FaTwitterSquare />
          <FaGooglePlusSquare />
          <FaFacebookSquare />
          <FaInstagramSquare />
        </div>
      </div>
      <div className='contact-right'>
        <h3 className='contact-heading'>Get in touch</h3>
        <form>
          <div className='contact-input-row'>
            <label htmlFor='name'>
              <input type='text' name='name' placeholder='Full Name' />
            </label>
            <label htmlFor='comapany'>
              <input type='text' name='company' placeholder='Company' />
            </label>
          </div>
          <div className='contact-input-row'>
            <label htmlFor='email'>
              <input type='email' name='email' placeholder='Email' />
            </label>
            <label htmlFor='phone'>
              <input type='number' name='phone' placeholder='Phone Number' />
            </label>
          </div>

          <p className='contact-subject-q'>
            In which areas of our services can we assist you?
          </p>
          <div className='radio-group'>
            <label htmlFor='radio1'>
              <input type='radio' id='radio1' name='radioGroup' />
              Essential Analytics
            </label>
            <label htmlFor='radio2'>
              <input type='radio' id='radio2' name='radioGroup' />
              Advanced Analytics
            </label>
            <label htmlFor='radio3'>
              <input type='radio' id='radio3' name='radioGroup' />
              Expert Analytics
            </label>
            <label htmlFor='radio4'>
              <input type='radio' id='radio4' name='radioGroup' />
              Other
            </label>
          </div>
          <div className='contact-message'>
            <label htmlFor='message'></label>
            <textarea
              name='message'
              cols='30'
              rows='2'
              placeholder='Your Message...'
            ></textarea>
          </div>
          <div className='contact-btn'>
            <button type='submit'>SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact
