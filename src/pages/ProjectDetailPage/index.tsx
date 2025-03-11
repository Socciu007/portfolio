import { useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { mockData } from '../../../mock/mock-data'
import redirect from '/assets/image/redirect.png'
import './style.scss'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const project = mockData.projects.find((item) => item.id === Number(id))
  return (
    <div className="project-detail-page">
      <div className="project-detail-page__container">
        <div className="wrapper">
          <div className="wrapper-title">
            <h1>{project?.name}</h1>
          </div>
          <div className="wrapper-time">
            <span>{project?.createdAt}</span>
          </div>
          <div className="wrapper-description">
            <p>{project?.description}</p>
          </div>
          <div className="wrapper-tag"></div>
          <div className="wrapper-url">
            <div className="wrapper-url-btn">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.8 }
                }}
                // whileTap={{ scale: 0.8 }}
                className="motion-button"
              >
                <a href="#" target="_blank">
                  Github Repository
                </a>
                <img src={redirect} alt="img-redirect" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.8 }
                }}
                // whileTap={{ scale: 0.9 }}
                className="motion-button"
              >
                <a href="#" target="_blank">
                  See Live
                </a>
                <img src={redirect} alt="img-redirect" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
