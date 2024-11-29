import { createContext, useState } from "react";
import { boardArray } from "../utils/boardArray.jsx";
import { initialPieceArray, resetPositions } from "../utils/chessPieces.jsx";
export const ChessContext = createContext();

const ChessProvider = ({ children }) => {
    const [pieceArray, setPieceArray] = useState(initialPieceArray);
    const updatePiecePositions = (newPieceArray) => setPieceArray(newPieceArray)
    const providerValue = {
        boardArray,
        pieceArray,
        updatePiecePositions,
        resetPositions
    }
    return (
        <ChessContext.Provider value={providerValue}>
            {children}
        </ChessContext.Provider>
    )
}

export default ChessProvider