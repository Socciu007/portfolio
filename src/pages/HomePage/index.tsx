import ItemProjectComponent from '../../components/ItemProjectComponent'
import ItemWorkComponent from '../../components/ItemWorkComponent'
import SlideComponent from '../../components/SlideComponent'
import './style.scss'
import { useState } from 'react'
import arrowLeft from '/assets/icon/arrowLeft.svg'
import arrowRight from '/assets/icon/arrowRight.svg'
import avatar from '/assets/image/me.jpg'
import { AnimatePresence, motion, wrap } from 'motion/react'

const HomePage = () => {
  const items = [1, 2, 3, 4, 5, 6]
  const [selectedItem, setSelectedItem] = useState(items[0])
  const [direction, setDirection] = useState<1 | -1>(1)

  function setSlide(newDirection: 1 | -1) {
    const nextItem = wrap(1, items.length, selectedItem + newDirection)
    setSelectedItem(nextItem)
    setDirection(newDirection)
  }
  const color = `var(--hue-${selectedItem})`
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
                    {/* <ItemProjectComponent />
                    <ItemProjectComponent /> */}
                    <motion.button
                      initial={false}
                      animate={{ backgroundColor: color }}
                      aria-label="Previous"
                      className='motion-button'
                      onClick={() => setSlide(-1)}
                      whileFocus={{ outline: `2px solid ${color}` }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <img src={arrowLeft} alt='arrow left' />
                    </motion.button>
                    <AnimatePresence
                      custom={direction}
                      initial={false}
                      mode="popLayout"
                    >
                      <SlideComponent key={selectedItem} color="#fff" >
                        <ItemProjectComponent />
                      </SlideComponent>
                    </AnimatePresence>
                    <AnimatePresence
                      custom={direction}
                      initial={false}
                      mode="popLayout"
                    >
                      <SlideComponent key={selectedItem + 1} color="#fff" >
                        <ItemProjectComponent />
                      </SlideComponent>
                    </AnimatePresence>
                    <motion.button
                      initial={false}
                      animate={{ backgroundColor: color }}
                      aria-label="Next"
                      className='motion-button'
                      onClick={() => setSlide(1)}
                      whileFocus={{ outline: `2px solid ${color}` }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <img src={arrowRight} alt='arrow right' />
                    </motion.button>
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