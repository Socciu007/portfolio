import './style.scss'
import { useParams } from 'react-router-dom'
import { mockData } from '../../../mock/mock-data'
import 'katex/dist/katex.min.css'
import HighlightCode from '../../components/SyntaxHighligh'
import LatexMath from '../../components/LatexMath'
import MathList from '../../components/LatexMath/MathList'

const BlogDetailPage = () => {
  const { id } = useParams()
  const blog = mockData?.blogs.find((item) => item?.id === Number(id))
  return (
    <div className="blog-page">
      <div className="blog-page__container">
        <div className="wrapper">
          <div className="wrapper-title">
            <h1>{blog?.title}</h1>
          </div>
          <div className="wrapper-time">
            <span>{blog?.createdAt}</span>
          </div>
          <div className="wrapper-sections">
            {blog?.sections &&
              blog?.sections?.map((item) => (
                <div key={item?.id} className="blog-item">
                  <div className="blog-item-title">
                    <h2>{item?.title}</h2>
                  </div>
                  {item?.description && <p>{item?.description}</p>}
                  {item?.subSections &&
                    item?.subSections?.map((subSection) => (
                      <div
                        key={subSection?.id}
                        className="blog-item-subSection"
                      >
                        <div className="blog-item-subSection-title">
                          <h2>{'title' in subSection && subSection?.title}</h2>
                        </div>
                        {subSection?.subSubSections &&
                          subSection?.subSubSections?.map((subSubSection) => (
                            <div
                              key={subSubSection?.id}
                              className="blog-item-subSection-subSection"
                            >
                              <div className="blog-item-subSection-subSection-title">
                                <h2>
                                  {'title' in subSubSection &&
                                    subSubSection?.title}
                                </h2>
                              </div>
                              {subSubSection?.content &&
                                subSubSection?.content?.map((content) => (
                                  <div
                                    key={content?.id}
                                    className="blog-item-subSection-subSection-content"
                                  >
                                    {content?.type === 'code' &&
                                      'description' in content &&
                                      content?.description ? (
                                        <HighlightCode
                                          codeBlock={content?.description}
                                          language="python"
                                        />
                                      ) : (
                                        content.type === 'mathList' ? (
                                          'mathList' in content &&
                                          content?.mathList &&
                                          <MathList mathList={content?.mathList} />
                                        ) : (
                                          content.type === 'image' ? (
                                            'url_image' in content &&
                                            content?.url_image &&
                                            <div className="blog-item-subSection-subSection-content-image">
                                              <img src={content?.url_image} alt={`image-${content?.id}`} />
                                            </div>
                                          ) : (
                                            'description' in content &&
                                          content?.description &&
                                          <LatexMath content={content?.description} />
                                          )
                                        )
                                      )
                                    }
                                  </div>
                                ))}
                            </div>
                          ))}
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPage
