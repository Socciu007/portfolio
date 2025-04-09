import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface SyntaxHighlighProps {
  code: string
  language: string
}

const SyntaxHighligh: React.FC<SyntaxHighlighProps> = ({ code, language }) => {
  console.log('code', code)
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {code}
    </SyntaxHighlighter>
  )
}

export default SyntaxHighligh
