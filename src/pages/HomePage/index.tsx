import { useState } from 'react'
import ItemWorkComponent from '../../components/ItemWorkComponent'
import SlideComponent from '../../components/SlideComponent'
import './style.scss'
import avatar from '/assets/images/me.jpg'
import { mockData } from '../../../mock/mock-data'
import Typewriter from 'typewriter-effect'
import { Zoom } from 'react-awesome-reveal'

const HomePage = () => {
  const [hoverButton, setHoverButton] = useState(false)
  return (
    <div className="home-page">
      <div className="home-page__container">
        <section className="home-page-section1" id="home">
          <div className="home-page-section1__left">
            <div className="home-page-section1__left-title">
              <h1>
                Hi,{' '}
                <Typewriter
                  options={{
                    strings: ['I\'m Tien,'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50
                  }}
                />
              </h1>
              <h1>Fullstack Developer</h1>
            </div>
            <p>
              I aim to build a strong professional network, gain insights from
              industry experts, and advance my career path toward becoming a
              senior developer.
            </p>
            <div className="home-page-section1__left-button">
              <button
                onMouseEnter={() => setHoverButton(true)}
                onAnimationEnd={() => setHoverButton(false)}
                className={`${
                  hoverButton ? 'animate__animated animate__pulse' : ''
                }`}
              >
                Download Resume
              </button>
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
                  <Zoom cascade direction="right" duration={1000}>
                    <p>Recent projects</p>
                  </Zoom>
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
                <Zoom cascade direction="right" duration={1000}>
                  <p>Featured works</p>
                </Zoom>
              </div>
            </div>
            <div className="home-page-section3__container-detail">
              {mockData?.workExperience?.map((item) => (
                <ItemWorkComponent key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
        <section className="home-page-section4" id="about">
          <div className="home-page-section4-container">
            <div className="home-page-section4-container-title">
              <div className="home-page-section4-container-title-text">
                <Zoom cascade direction="right" duration={1000}>
                  <p>About me</p>
                </Zoom>
                <span>Who I Am</span>
              </div>
            </div>
            <div className="wrapper">
              <div className="wrapper-left">
                <div className="wrapper-left-content">
                  <p>
                    My name is Tien. I am a fullstack developer with a passion
                    for building innovative and efficient applications. I
                    studied Management Information Systems at Hanoi
                    University of Science and Technology, where I developed
                    strong knowledge of algorithms and programming. <br />
                    Beyond coding, I am always eager to explore new technologies
                    and stay updated with the latest trends in the industry. I
                    enjoy challenging myself to learn and apply new skills to
                    improve my work. <br />
                    In my free time, I love playing sports, traveling, and
                    discovering new things. Exploring different cultures,
                    experiencing new adventures, and staying active help me
                    maintain a balanced and creative mindset. I believe that
                    continuous learning and adaptability are key to success in
                    are key to success in the ever-evolving world of technology.
                  </p>
                </div>
              </div>
              <div className="wrapper-right">
                <div className="wrapper-right-image"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
