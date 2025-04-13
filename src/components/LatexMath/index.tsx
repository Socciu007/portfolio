import { BlockMath, InlineMath } from 'react-katex'
import { parseContent } from '../../utils'
import parse from 'html-react-parser'

const LatexMath = ({ content }: { content: string }) => {
  return (
    <div className="latex-math">
      {parseContent(
        content
      )?.map((item) => {
        if (item.startsWith('b\\')) {
          return <BlockMath key={item} math={item.slice(1)}/>
        } else if (item.startsWith('i\\')) {
          return <span key={item}> <InlineMath math={item.slice(1)}/> </span>
        } else {
          return <span key={item}>{parse(item)}</span>
        }
      })}
    </div>
  )
}

export default LatexMath

