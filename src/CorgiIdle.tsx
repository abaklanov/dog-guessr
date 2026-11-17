import { useEffect, useState } from 'react'
import corgiIdle from './assets/corgi-idle.png'

const FRAME_MS = 500
const FRAME_COUNT = 2

function CorgiIdle() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setFrame((current) => (current + 1) % FRAME_COUNT)
    }, FRAME_MS)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="absolute -bottom-3 left-100 z-40 h-44 w-48 -translate-x-1/2 overflow-hidden">
      <img
        src={corgiIdle}
        alt=""
        className="h-full w-[200%] max-w-none"
        style={{ transform: `translateX(-${(frame * 130) / FRAME_COUNT}%)` }}
      />
    </div>
  )
}

export default CorgiIdle
