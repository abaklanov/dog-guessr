import { useEffect, useState } from 'react'
import idleSprite from './assets/corgi-idle.png'
import runSprite from './assets/corgi-running.png'

const FRAME_MS = 500
const FRAME_COUNT = 2

type CorgiProps = {
  isRunning: boolean
}

function Corgi({ isRunning }: CorgiProps) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    setFrame(0)

    const id = window.setInterval(() => {
      setFrame((current) => (current + 1) % FRAME_COUNT)
    }, FRAME_MS)

    return () => window.clearInterval(id)
  }, [isRunning])

  const shiftPercent = isRunning ? 100 : 130
  const sprite = isRunning ? runSprite : idleSprite

  return (
    <div
      className={`absolute -bottom-3 left-100 z-40 -translate-x-1/2 overflow-hidden ${
        isRunning ? 'h-36 w-64' : 'h-44 w-48'
      }`}
    >
      <img
        src={sprite}
        alt=""
        className="h-full w-[200%] max-w-none"
        style={{
          transform: `translateX(-${(frame * shiftPercent) / FRAME_COUNT}%)`,
        }}
      />
    </div>
  )
}

export default Corgi
