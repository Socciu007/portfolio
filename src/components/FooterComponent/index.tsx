import fbIcon from '/assets/icons/fb.svg'
import igIcon from '/assets/icons/insta.svg'
import linkedinIcon from '/assets/icons/Linkedin.svg'
import githubIcon from '/assets/icons/github.svg'
import addressIcon from '/assets/icons/geo-alt.svg'
import phoneIcon from '/assets/icons/phone.svg'
import emailIcon from '/assets/icons/envelope.svg'
import websiteIcon from '/assets/icons/globe.svg'
import { Link } from 'react-router-dom'
import './style.scss'
import FormMailComponent from '../FormMailComponent'
const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-contact">
          <div className="wrapper">
            <div className="wrapper-info">
              <div className="footer__container-contact-title">
                <p>Contact me</p>
                <span>Get in touch</span>
              </div>
              <div className="wrapper-info-item">
                <div className="address item">
                  <div className="item-icon">
                    <img src={addressIcon} alt="logo-address" />
                  </div>
                  <div className="item-info">
                    <p>Address:</p>
                    <span>Kham Thien, Dong Da District, Hanoi</span>
                  </div>
                </div>
                <div className="email item">
                  <div className="item-icon">
                    <img src={emailIcon} alt="logo-email" />
                  </div>
                  <div className="item-info">
                    <p>Email:</p>
                    <span>manhtien310701@gmail.com</span>
                  </div>
                </div>
                <div className="phone item">
                  <div className="item-icon">
                    <img src={phoneIcon} alt="logo-phone" />
                  </div>
                  <div className="item-info">
                    <p>Phone:</p>
                    <span>+84 372 072 732</span>
                  </div>
                </div>
                <div className="websiste item">
                  <div className="item-icon">
                    <img src={websiteIcon} alt="logo-website" />
                  </div>
                  <div className="item-info">
                    <p>Website:</p>
                    <Link
                      style={{ textDecoration: 'none', color: '#000' }}
                      to="https://portfolio-jade-eight-35.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://portfolio-jade-eight-35.vercel.app
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper-form">
              <FormMailComponent />
            </div>
          </div>
        </div>
        <div className="footer__container-left">
          <div className="footer__container-left-connect">
            <a
              href="https://www.facebook.com/manh.tien.1865904/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fbIcon} alt="logo-facebook" />
            </a>
            <a
              href="https://www.instagram.com/manhtien.007/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={igIcon} alt="logo-instagram" />
            </a>
            <a
              href="https://github.com/Socciu007"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="logo-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/tien-manh-88474120b"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="logo-linkedin" />
            </a>
          </div>
          <p className="footer__container-left-copyright">
            Thanks for visiting and happy coding! <br />© Vu Tien 2025, All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
