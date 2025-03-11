import ItemWorkComponent from '../../components/ItemWorkComponent'
import SlideComponent from '../../components/SlideComponent'
import './style.scss'
import avatar from '/assets/image/me.jpg'
import { mockData } from '../../../mock/mock-data'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <section className="home-page-section1" id="home">
          <div className="home-page-section1__left">
            <div className="home-page-section1__left-title">
              <h1>Hi, I'm Tien, </h1>
              <h1>Fullstack Developer</h1>
            </div>
            <p>
              I aim to build a strong professional network, gain insights from
              industry experts, and advance my career path toward becoming a
              senior developer.
            </p>
            <div className="home-page-section1__left-button">
              <button>Download Resume</button>
            </div>
          </div>
          <div className="home-page-section1__right">
            <div className="home-page-section1__right-avatar">
              <img src={avatar} alt="Manh Tien" />
              <div className="circle-avatar"></div>
            </div>
          </div>
        </section>
        <section className="home-page-section2" id="projects">
          <div className="home-page-section2__container">
            <div className="home-page-section2__container__wrapper">
              <div className="home-page-section2__container__wrapper-title">
                <div className="home-page-section2__container__wrapper-title-text">
                  <p>Recent projects</p>
                </div>
              </div>
              <div className="home-page-section2__container__wrapper-detail">
                <SlideComponent arrSlide={mockData.projects} />
              </div>
            </div>
          </div>
        </section>
        <section className="home-page-section3" id="works">
          <div className="home-page-section3__container">
            <div className="home-page-section3__container-title">
              <div className="home-page-section3__container-title-text">
                <p>Featured works</p>
              </div>
            </div>
            <div className="home-page-section3__container-detail">
              <ItemWorkComponent />
              <ItemWorkComponent />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
