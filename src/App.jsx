function App() {
  return (
    <div className="flex min-h-svh flex-col bg-amber-50 text-stone-800">
      <header className="border-b border-amber-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold tracking-tight">Dog Guessr</h1>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800">
            Pohja
          </span>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 px-6 py-16 text-center">
        <p className="text-5xl">🐕</p>
        <h2 className="text-3xl font-semibold">Arvaa rotu kuvasta</h2>
        <p className="max-w-md text-stone-600">
          React + Vite + Tailwind -pohja on valmis. Seuraavaksi peli tähän.
        </p>
        <button
          type="button"
          className="mt-2 rounded-xl bg-amber-500 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-amber-600"
        >
          Aloita (tulossa)
        </button>
      </main>
    </div>
  )
}

export default App
