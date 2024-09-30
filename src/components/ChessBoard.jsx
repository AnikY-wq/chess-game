import React, { useContext, useEffect, useState } from 'react';
import { ChessContext } from '../context/ChessContext.jsx';
// import { pieceArray, resetPositions } from '../utils/chessPieces.js';



export const ChessBoard = () => {
    const { boardArray, pieceArray, updatePiecePositions } = useContext(ChessContext)
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
    return (
        <div className="chessboard">
            {boardArray.map((el, i) => {
                const piece = pieceArray.find(p => el?.id === p?.position);
                const classes = [
                    'board-square',
                    el?.color,
                    piece && piece?.position == el?.id ? 'square-with-piece' : '',
                    piece?.position == el?.id ? 'active-square' : ''
                ]
                return (
                    < button
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
            })}
            {console.log(`${test.f} ${test.s}`)}

        </div >
    )
}

// PLEASE SOLVE BELOW QUERY -
/*
Think as Frontend developer and help me in adding css for boardSquare on three cases
    1. normal board square hover effect
    2. boardSquare clicked effect, if clicked square is active until clicked on another board square
    3. if click board square contains a piece, then highlight that square (style different than normal hover)

Description of chess board game 
<ChessBoard> is a component for Chess Game Board. 
boardArray is 1-D array of objects, each object is of format - 
    {
        id: `${col}${row + 1}`,
        color: (Math.floor(i / 8) + i) % 2 == 0 ? "white" : "black",
        pieceId: ""
    }
    
    id, decides - unique position of square in board
    color: color of the square, using this i am adding css class of either ".white" or ".black"
    pieceId: ID of the piece which is placed on the square

pieceArray is 1-D array of objects, each object is of format - 
    {
        id: `w-pawn-${i + 1}`,
        name: 'black-pawn',
        url: 'src\\assets\\pieces-basic-svg\\pawn-w.svg',
        position: `${alphas[i]}2`
    }
    
    id: id of the piece - 
    name: name of the piece
    url: path of the piece image
    position: position on the board, id of board sqaure


Placing of the piece image on board square, is done by comparing
    boardArray.id === pieceArray.position   
*/