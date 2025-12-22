import { useState } from "react"

interface Game {
  id: number,
  title: string,
  cover: string;
}

function App() {
  const [games, setGames] = useState<Game[]>(() => {
    const storedGames = localStorage.getItem("obc-game-lib")
    if (!storedGames) return []
    return JSON.parse(storedGames) as Game[]
  })

  const [title, setTitle] = useState<string>("")
  const [cover, setCover] = useState<string>("")

  const addGame = ({ title, cover }: Pick<Game, "title" | "cover">) => {
    const id = Math.floor(Math.random() * 1000000)
    const game: Game = { id, title, cover }
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const removeGame = (id: number) => {
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle("")
    setCover("")
  }

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input type="text" id="title" value={title} onChange={(ev) => setTitle(ev.target.value)} />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input type="text" id="cover" value={cover} onChange={(ev) => setCover(ev.target.value)} />
        </div>
        <button>Adicionar</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="Capa do jogo" />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>
                Remover
              </button>
            </div>
          </div>))}
      </div>
    </div>
  )
}

export default App