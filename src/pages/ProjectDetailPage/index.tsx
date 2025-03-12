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
            <div className="wrapper-description-image">
              <img src={project?.image} alt="img-project" />
            </div>
          </div>
          <div className="wrapper-responsibilities">
            {project?.responsibilities?.map((item) => (
              <div className="wrapper-responsibilities-list" key={item.id}>
                <div className="wrapper-responsibilities-list-item">
                  <div className="wrapper-responsibilities-list-item-title">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="wrapper-responsibilities-list-item-image">
                    {item?.image && <img src={item.image} alt="img-project" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="wrapper-tag">
            <div className="wrapper-tag-item">
              Tags:
              {project?.technologies?.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="wrapper-url">
            <div className="wrapper-url-btn">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.8 }
                }}
                whileTap={{ scale: 1 }}
                className="motion-button"
              >
                <a href={project?.linkGithub} target="_blank">
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
                <a href={project?.link} target="_blank">
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
