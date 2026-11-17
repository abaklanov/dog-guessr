import background from './assets/background.png'
import clouds from './assets/clouds.png'
import forest from './assets/forest.png'
import ground from './assets/ground.png'
import sun from './assets/sun.png'

function App() {
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
      </div>
      <h1 className="py-6 text-center text-3xl font-semibold tracking-tight">
        Dog Guessr
      </h1>
    </div>
  )
}

export default App
