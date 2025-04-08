import './style.scss'
import { useParams } from 'react-router-dom'
import { mockData } from '../../../mock/mock-data'
import parse from 'html-react-parser'

const BlogDetailPage = () => {
  const { id } = useParams()
  const blog = mockData?.blogs.find((item) => item?.id === Number(id))
  console.log(blog)
  return (
    <div className="blog-page">
      <div className="blog-page__container">
        <div className="wrapper">
          <div className='wrapper-title'>
            <h1>{blog?.title}</h1>
          </div>
          <div className='wrapper-time'>
            <span>{blog?.createdAt}</span>
          </div>
          <div className='wrapper-sections'>
            {blog?.sections &&
              blog?.sections?.map((item) => (
                <div className='blog-item'>
                  <div className='blog-item-title'>
                    <h2>{item?.title}</h2>
                  </div>
                  {item?.description && <p>{item?.description}</p>}
                  {item?.subSections && item?.subSections?.map((subSection) => (
                    <div className='blog-item-subSection'>
                      <div className='blog-item-subSection-title'>
                        <h2>{'title' in subSection && subSection?.title}</h2>
                      </div>
                      {subSection?.subSubSections && subSection?.subSubSections?.map((subSubSection) => (
                        <div className='blog-item-subSection-subSection'>
                          <div className='blog-item-subSection-subSection-title'>
                            <h2>{'title' in subSubSection && subSubSection?.title}</h2>
                          </div>
                          {subSubSection?.content && subSubSection?.content?.map((content) => (
                            <div className='blog-item-subSection-subSection-content'>
                              <p>{'description' in content && content?.description && parse(content?.description)}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPage
