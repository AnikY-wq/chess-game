import React, { useContext, useEffect, useState } from 'react';
import { ChessContext } from '../context/ChessContext.jsx';
// import { pieceArray, resetPositions } from '../utils/chessPieces.js';



export const ChessBoard = () => {
    const { boardArray, pieceArray, updatePiecePositions } = useContext(ChessContext)
    // useEffect(resetPositions, []) - getting called two times {current workaround - calling function below}
    const test = { f: 0, s: 0 }

    const [piece, setPiece] = useState(null);

    const handlePieceSelect = (square) => {
        try {
            const selectPiece = pieceArray.find(p => p.position === square);
            if (selectPiece) {
                console.log(`${selectPiece?.id} selected`)
                setPiece(selectPiece)
                return;
            } else {
                if (piece) {
                    const newPositions = pieceArray.map(ob => {
                        if (ob?.id == piece.id) {
                            return { ...ob, position: square }
                        }
                        return ob;
                    })
                    updatePiecePositions(newPositions)
                    setPiece(null)
                } else {
                    return;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }


    console.log(pieceArray)
    return (
        <div className="chessboard">
            {boardArray.map((el, i) => {
                const piece = pieceArray.find(p => el?.id === p?.position);
                return (
                    < button
                        key={el?.id}
                        className={`${el?.color} board-square`}
                        onClick={() => handlePieceSelect(el?.id)}
                    >
                        {piece &&
                            <img
                                src={piece?.url}
                                alt={piece?.name}
                                className={`chess-piece`}
                            />}
                    </button>
                )
            })}
            {console.log(`${test.f} ${test.s}`)}

        </div >
    )
}

// PLEASE SOLVE BELOW QUERY -
// on line 8, i have written useEffect, there is a console.log('reset positions') on resetPosition function, when i run the code, on browser's dev tool's console, i am seeing "reset positions", logged two times, how is that possible - here is the code 
