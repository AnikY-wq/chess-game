import { createContext, useState } from "react";
import { boardArray } from "../utils/boardArray.js";
import { initialPieceArray, resetPositions } from "../utils/chessPieces.js"
export const ChessContext = createContext();

const ChessProvider = ({ children }) => {
    const [pieceArray, setPieceArray] = useState(initialPieceArray);
    const updatePiecePositions = (newPieceArray) => {
        setPieceArray(newPieceArray)
    }
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
