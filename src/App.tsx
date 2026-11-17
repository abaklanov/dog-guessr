import background from './assets/background.png'

function App() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-[32.5rem] w-full flex-row flex-nowrap">
        <img
          src={background}
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
      </div>
      <h1 className="py-6 text-center text-3xl font-semibold tracking-tight">
        Dog Guessr
      </h1>
    </div>
  )
}

export default App
