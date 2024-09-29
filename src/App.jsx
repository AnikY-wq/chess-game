import './App.css'
import { ChessBoard } from './components/ChessBoard.jsx'
import { GameTray } from './components/GameTray.jsx'
import ChessProvider from './context/ChessContext.jsx'

function App() {
  return (
    <ChessProvider>
      <ChessBoard />
      <GameTray />
    </ChessProvider>
  )
}

export default App
