import fbIcon from '/assets/icon/fb.svg'
import igIcon from '/assets/icon/insta.svg'
import linkedinIcon from '/assets/icon/Linkedin.svg'
import './style.scss'

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-left">
          <div className="footer__container-left-connect">
            <a href="#"><img src={fbIcon} alt="logo-facebook" /></a>
            <a href="#"><img src={igIcon} alt="logo-instagram" /></a>
            <a href="#"><img src={linkedinIcon} alt="logo-linkedin" /></a>
          </div>
          <p>©Vu Tien 2025, All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent