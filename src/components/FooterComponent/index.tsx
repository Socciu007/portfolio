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
                    <img src={addressIcon} loading='lazy' alt="logo-address" />
                  </div>
                  <div className="item-info">
                    <p>Address:</p>
                    <span>Kham Thien, Dong Da District, Hanoi</span>
                  </div>
                </div>
                <div className="email item">
                  <div className="item-icon">
                    <img src={emailIcon} loading='lazy' alt="logo-email" />
                  </div>
                  <div className="item-info">
                    <p>Email:</p>
                    <span>manhtien310701@gmail.com</span>
                  </div>
                </div>
                <div className="phone item">
                  <div className="item-icon">
                    <img src={phoneIcon} loading='lazy' alt="logo-phone" />
                  </div>
                  <div className="item-info">
                    <p>Phone:</p>
                    <span>+84 372 072 732</span>
                  </div>
                </div>
                <div className="websiste item">
                  <div className="item-icon">
                    <img src={websiteIcon} loading='lazy' alt="logo-website" />
                  </div>
                  <div className="item-info">
                    <p>Website:</p>
                    <Link
                      to="https://no-money.vercel.app/"
                      target="_blank"
                      rel="prefetch"
                    >
                      https://no-money.vercel.app
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
              rel="prefetch"
            >
              <img src={fbIcon} loading='lazy' alt="logo-facebook" />
            </a>
            <a
              href="https://www.instagram.com/manhtien.007/"
              target="_blank"
              rel="prefetch"
            >
              <img src={igIcon} loading='lazy' alt="logo-instagram" />
            </a>
            <a
              href="https://github.com/Socciu007"
              target="_blank"
              rel="prefetch"
            >
              <img src={githubIcon} loading='lazy' alt="logo-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/tien-manh-88474120b"
              target="_blank"
              rel="prefetch"
            >
              <img src={linkedinIcon} loading='lazy' alt="logo-linkedin" />
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
