import fbIcon from '/assets/icon/fb.svg'
import igIcon from '/assets/icon/insta.svg'
import twIcon from '/assets/icon/Linkedin.svg'
import './style.scss'

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-left">
            <div className="footer__container-left-connect">
                <a href="#"><img src={fbIcon} alt="logo" /></a>
                <a href="#"><img src={igIcon} alt="logo" /></a>
                <a href="#"><img src={twIcon} alt="logo" /></a>
            </div>
            <p>Copyright ©2020 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent