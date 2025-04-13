import React, { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import downIcon from '/assets/icons/down.svg'
import './style.scss'

type HighlightCodeProps = {
  codeBlock: string;
  language: string; // 'python' | 'javascript' | 'typescript' | ...
};

const HighlightCode: React.FC<HighlightCodeProps> = ({ codeBlock, language }) => {
  const [showAll, setShowAll] = useState(false)
  const trimmedCodeBlock = codeBlock.trim()
  const lines = trimmedCodeBlock.split('\n')
  const shouldShowButton = lines.length > 15
  const displayedLines = showAll ? lines : lines.slice(0, 15)

  return (
    <div>
      <Highlight
        theme={themes.dracula}
        code={displayedLines.join('\n')}
        language={language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="code-block" style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="code-block-line-number">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
            {shouldShowButton && !showAll && (
              <div className="code-block-show-more">
                <button onClick={() => setShowAll(true)}>
                  <img src={downIcon} alt="down" />
                </button>
              </div>
            )}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default HighlightCode
