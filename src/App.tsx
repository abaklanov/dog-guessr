import { useState } from 'react'
import background from './assets/background.png'
import clouds from './assets/clouds.png'
import forest from './assets/forest.png'
import ground from './assets/ground.png'
import sun from './assets/sun.png'
import Corgi from './Corgi.tsx'

function App() {
  const [isRunning, setIsRunning] = useState(false)

  return (
    <div className="flex w-full flex-col">
      <div className="relative flex h-[32.5rem] w-full flex-row flex-nowrap">
        <img
          src={background}
          alt=""
          className="relative z-0 h-full w-full object-cover object-bottom"
        />
        <img
          src={sun}
          alt=""
          className="absolute top-0 right-8 z-[5] w-40"
        />
        <img
          src={clouds}
          alt=""
          className="absolute inset-x-0 -top-15 z-10 w-full"
        />
        <img
          src={forest}
          alt=""
          className="absolute inset-x-0 -bottom-13 z-20 w-full"
        />
        <img
          src={ground}
          alt=""
          className="absolute inset-x-0 -bottom-30 z-30 w-full"
        />
        <Corgi isRunning={isRunning} />
      </div>
      <div className="flex flex-col items-center gap-4 py-6 mt-30">
        <h1 className="text-3xl font-semibold tracking-tight">Dog Guessr</h1>
        <button
          type="button"
          onClick={() => setIsRunning((current) => !current)}
          className="rounded-xl bg-amber-500 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-amber-600"
        >
          {isRunning ? 'Lopeta juoksu' : 'Aloita juoksu'}
        </button>
      </div>
    </div>
  )
}

export default App
