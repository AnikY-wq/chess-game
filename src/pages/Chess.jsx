import "../App.css"
import { ChessBoard } from "../components/ChessBoard"
import ChessProvider from "../context/ChessContext"


function App() {
  return (
    <ChessProvider>
      <ChessBoard />
    </ChessProvider>
  )
}

export default App