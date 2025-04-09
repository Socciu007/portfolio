import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidChartProps {
  chart: string;
}

const MermaidChart: React.FC<MermaidChartProps> = ({ chart }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    mermaid.initialize({ startOnLoad: false })

    mermaid.render('mermaid-chart', chart).then((svgCode) => {
      if (ref.current) {
        ref.current.innerHTML = svgCode.svg
      }
    })
  }, [chart])

  return <div ref={ref} />
}

export default MermaidChart
