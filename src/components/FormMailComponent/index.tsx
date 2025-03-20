import './style.scss'
import sendIcon from '/assets/icons/send-fill.svg'
import { toast } from 'react-toastify'
const FormMailComponent = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData)
      toast.success('🦄 Sent successfully')
      console.log(data)
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error(error)
      toast.error('🦄 Send message failed')
    }
  }
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="form-group" style={{ marginTop: '0' }}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          placeholder="Enter your subject"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Your message"
        ></textarea>
      </div>
      <button type="submit" className="btn-send">
        <img src={sendIcon} alt="icon send" />
        Send Message
      </button>
    </form>
  )
}

export default FormMailComponent
