import { useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from '../../ThemeContext'
import './style.scss'

const Gift1 = () => {
  const { setDarkMode } = useTheme()
  const totalPages = 23
  const pages = useMemo(
    () => [
      'Gửi em... 🎄❤️',
      'Giáng Sinh lại về, mang theo cái lạnh dễ thương của mùa đông…',
      'và cả những điều anh muốn nói với em từ lâu.',
      'Trong ánh đèn Noel lấp lánh,',
      'anh chỉ ước có em bên cạnh để sẻ chia ấm áp.',
      'Em biết không… ✨',
      'sự xuất hiện của em khiến mùa đông này trở nên đặc biệt hơn.',
      'Không cần tuyết rơi,',
      'chỉ cần nụ cười của em là đủ làm trái tim anh ấm lại.',
      'Giáng Sinh là mùa của yêu thương,',
      'và anh muốn dành phần yêu thương nhất cho em. ❤️',
      'Anh chẳng có món quà đắt tiền nào,',
      'chỉ có tấm lòng chân thành muốn gửi đến em.',
      'Anh chúc em một mùa Noel an yên,',
      'một trái tim ấm áp,',
      'và một nụ cười luôn nở trên môi. ✨',
      'Nếu có thể…',
      'anh muốn trở thành người khiến em hạnh phúc trong mùa đông này.',
      'Dẫu tuyết không rơi ở nơi ta sống,',
      'anh vẫn mong mang đến cho em cảm giác đẹp như phép màu Giáng Sinh.',
      'Cảm ơn em đã xuất hiện trong cuộc đời anh…',
      'dù là vô tình hay do ông già Noel sắp đặt. 🎅💫',
      'Merry Christmas, công chúa của anh. ❤️🎄'
    ],
    []
  )

  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const hasPlayedRef = useRef(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // ===== Dark mode =====
  useEffect(() => {
    const prevTheme = JSON.parse(localStorage.getItem('dark-mode') || 'false')
    setDarkMode?.(true)
    return () => {
      setDarkMode?.(prevTheme)
    }
  }, [])

  useEffect(() => {
    // If not open, stop
    if (!isOpen) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = null
      return
    }

    // If open, auto next
    intervalRef.current = setInterval(() => {
      setCurrentPage((p) => (p < totalPages ? p + 1 : 1))
    }, 2200)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [isOpen, totalPages])

  // ===== STAR FIELD (Create 200 stars once) =====
  const stars = useMemo(() => {
    return Array.from({ length: 200 }, (_, i) => {
      const x = Math.random() * 100
      const y = Math.random() * 100
      const delay = Math.random() * 5
      const duration = 2 + Math.random() * 3
      return {
        id: i,
        style: {
          left: `${x}vw`,
          top: `${y}vh`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`
        }
      }
    })
  }, [])

  const [snowflakes, setSnowflakes] = useState<{
    id: string
    style: { left: string; animationDuration: string; fontSize: string }
  }[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`
      const left = Math.random() * 100
      const duration = 5 + Math.random() * 5
      const fontSize = 10 + Math.random() * 15

      const flake = {
        id,
        style: {
          left: `${left}vw`,
          animationDuration: `${duration}s`,
          fontSize: `${fontSize}px`
        }
      }

      setSnowflakes((prev) => [...prev, flake])

      setTimeout(() => {
        setSnowflakes((prev) => prev.filter((x) => x.id !== id))
      }, 10000)
    }, 150)

    return () => clearInterval(interval)
  }, [])

  // ===== Play audio =====
  const playAudioOnce = async () => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = 26
    if (hasPlayedRef.current) return

    try {
      await audio.play()
      hasPlayedRef.current = true
    } catch (e) {
      console.log('Cannot play audio:', e)
    }
  }

  // ===== envelope logic (thay jQuery) =====
  const openEnvelope = async () => {
    setIsOpen(true)
    setCurrentPage(1)
    await playAudioOnce()
  }

  const resetEnvelope = async () => {
    setIsOpen(false)
    await playAudioOnce()

    setTimeout(() => {
      setCurrentPage(1)
    }, 600)
  }

  // const nextLyric = () => {
  //   setCurrentPage((p) => (p < totalPages ? p + 1 : 1))
  // }

  // const handleEnvelopeClick = () => {
  //   if (isOpen) nextLyric()
  // }

  return (
    <div className="christmas-root">
      <img
        src="https://i.pinimg.com/originals/7f/1f/76/7f1f76ac29bc01ad318abbf0468b1062.gif"
        className="santa"
        alt=""
      />

      <div className="star-field">
        {stars.map((s) => (
          <div key={s.id} className="star" style={s.style} />
        ))}
      </div>

      {snowflakes.map((f) => (
        <div key={f.id} className="snowflake" style={f.style}>
          ❄
        </div>
      ))}

      <div className="envlope-wrapper">
        <div
          id="envelope"
          className={isOpen ? 'open' : 'close'}
          // onClick={handleEnvelopeClick}
        >
          <div className="wax-seal"></div>
          <div className="front flap"></div>
          <div className="front pocket"></div>

          <div className="letter">
            <div className="letter-corner corner-tl"></div>
            <div className="letter-corner corner-br"></div>

            <div className="message">
              <div className="lyrics">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNo = idx + 1
                  const text = pages[idx] || ''
                  return (
                    <div
                      key={pageNo}
                      className={`lyric-page ${
                        pageNo === currentPage ? 'active' : ''
                      }`}
                      id={`page${pageNo}`}
                    >
                      <p>{text}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="page-indicator">
              {currentPage}/{totalPages}
            </div>
          </div>

          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>

          <div className="sparkles">
            <div className="sparkle s1"></div>
            <div className="sparkle s2"></div>
            <div className="sparkle s3"></div>
          </div>
        </div>
      </div>

      <div className="controls">
        {!isOpen ? (
          <button id="openBtn" onClick={openEnvelope}>
            Open
          </button>
        ) : (
          <button id="resetBtn" onClick={resetEnvelope}>
            Close
          </button>
        )}
      </div>

      <audio ref={audioRef} id="sound" loop>
        <source src="/assets/audio/nhac.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Gift1
