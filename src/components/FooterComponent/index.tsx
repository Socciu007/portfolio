import fbIcon from '/assets/icons/fb.svg'
import igIcon from '/assets/icons/insta.svg'
import linkedinIcon from '/assets/icons/Linkedin.svg'
import githubIcon from '/assets/icons/github.svg'
import './style.scss'

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-left">
          <div className="footer__container-left-connect">
            <a href="https://www.facebook.com/manh.tien.1865904/" target="_blank" rel="noreferrer"><img src={fbIcon} alt="logo-facebook" /></a>
            <a href="https://www.instagram.com/manhtien.007/" target="_blank" rel="noreferrer"><img src={igIcon} alt="logo-instagram" /></a>
            <a href="https://github.com/Socciu007" target="_blank" rel="noreferrer"><img src={githubIcon} alt="logo-github" /></a>
            <a href="https://www.linkedin.com/in/tien-manh-88474120b" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="logo-linkedin" /></a>
          </div>
          <p>© Vu Tien 2025, All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent