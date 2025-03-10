import ItemProjectComponent from '../../components/ItemProjectComponent'
import ItemWorkComponent from '../../components/ItemWorkComponent'
import './style.scss'

import avatar from '/assets/image/me.jpg'
const HomePage = () => {
  return (
    <div className="home-page">
        <div className="home-page__container">
            <section className="home-page-section1">
                <div className="home-page-section1__left">
                  <div className="home-page-section1__left-title">
                    <h1>Hi, I'm Tien, </h1>
                    <h1>Fullstack Developer</h1>
                  </div>
                  <p>I aim to build a strong professional network, gain insights from industry experts, and advance my career path toward becoming a senior
                  developer.</p>
                  <div className="home-page-section1__left-button">
                    <button>Download Resume</button>
                  </div>
                </div>
                <div className="home-page-section1__right">
                  <div className="home-page-section1__right-avatar">
                    <img src={avatar} alt="Manh Tien" />
                    <div className='circle-avatar'></div>
                  </div>
                </div>
            </section>
            <section className="home-page-section2">
                <div className="home-page-section2__container">
                  <div className="home-page-section2__container-title">
                    <div className="home-page-section2__container-title-text">
                      <p>Recent projects</p>
                    </div>
                    <div className="home-page-section2__container-title-more smartphone">
                      <span>View all</span>
                    </div>
                  </div>
                  <div className="home-page-section2__container-detail">
                    <ItemProjectComponent />
                    <ItemProjectComponent />
                  </div>
                </div>
            </section>
            <section className="home-page-section3">
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