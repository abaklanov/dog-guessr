import background from './assets/background.png'

function App() {
  return (
    <div className="flex h-svh w-full flex-row flex-nowrap">
      <img
        src={background}
        alt=""
        className="h-full w-full object-cover object-bottom"
      />
    </div>
  )
}

export default App
