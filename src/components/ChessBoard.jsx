import React, { useContext, useEffect, useState } from "react";
import { ChessContext } from "../context/ChessContext";

export function ChessBoard() {
    const { boardArray, pieceArray, updatePiecePositions } = useContext(ChessContext)
    const [piece, setPiece] = useState(null)
    const handlePieceSelect = (square) => {
        try {
            const selectPiece = pieceArray.find(p => p.position == square);
            if (selectPiece) {
                console.log(`${selectPiece?.id} selected`);
                setPiece(selectPiece);
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
                } else return;
            }
        } catch (error) {
            console.log(error?.message)
        }
    }

    return (
        <div className="chessboard">
            {
                boardArray.map((el, i) => {
                    const piece = pieceArray?.find(p => el?.id === p?.position);
                    const classes = [`board-sqaure`, el?.color]
                    return (
                        <button
                            key={el?.id}
                            className={classes.join(' ')}
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
                })
            }
        </div>
    )
}