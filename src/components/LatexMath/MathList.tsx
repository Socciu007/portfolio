import { InlineMath } from 'react-katex'
import { parseContent } from '../../utils'

const MathList = ({ mathList }: { mathList: { latex: string; description: string }[] }) => {
  return (
    <ul>
      {mathList.map((item, index) => (
        <li key={index}>
          {item.latex && <><InlineMath math={item.latex} />:</>} {parseContent(item.description)?.map((item) => {
            if (item.startsWith('i')) {
              return <span key={item}> <InlineMath math={item.slice(1)} /> </span>
            } else {
              return <span key={item}>{item}</span>
            }
          })}
        </li>
      ))}
    </ul>
  )
}

export default MathList


