import { alphas } from "./boardArray.jsx"

const piece = {
    id: "",             // id of piece
    name: "",           // name of piece
    position: "",       // position on the board, id of board sqaure
    url: ""
}

export const initialPieceArray = []
export const resetPositions = () => {
    console.log(`reset positions - started, pieces -  length ${initialPieceArray.length} - ${JSON.stringify({ initialPieceArray })}`)
    // push 8 black pawns into pieceArray
    for (let i = 0; i < 8; i++) {
        initialPieceArray.push({
            id: `b-pawn-${i + 1}`,
            name: 'black-pawn',
            url: "pieces-basic-svg\\pawn-b.svg",
            position: `${alphas[i]}7`
        })
    }
    // push 8 white pawns into pieceArray
    for (let i = 0; i < 8; i++) {
        initialPieceArray.push({
            id: `w-pawn-${i + 1}`,
            name: 'black-pawn',
            url: 'pieces-basic-svg\\pawn-w.svg',
            position: `${alphas[i]}2`
        })
    }
    // add black pieces
    initialPieceArray.push(
        { id: 'b-rook-1', name: 'black-rook', url: 'pieces-basic-svg/rook-b.svg', position: 'a8' },
        { id: 'b-knight-1', name: 'black-knight', url: 'pieces-basic-svg/knight-b.svg', position: 'b8' },
        { id: 'b-bishop-1', name: 'black-bishop', url: 'pieces-basic-svg/bishop-b.svg', position: 'c8' },
        { id: 'b-queen', name: 'black-queen', url: 'pieces-basic-svg/queen-b.svg', position: 'd8' },
        { id: 'b-king', name: 'black-king', url: 'pieces-basic-svg/king-b.svg', position: 'e8' },
        { id: 'b-bishop-2', name: 'black-bishop', url: 'pieces-basic-svg/bishop-b.svg', position: 'f8' },
        { id: 'b-knight-2', name: 'black-knight', url: 'pieces-basic-svg/knight-b.svg', position: 'g8' },
        { id: 'b-rook-2', name: 'black-rook', url: 'pieces-basic-svg/rook-b.svg', position: 'h8' }
    );
    // add white pieces
    initialPieceArray.push(
        { id: 'w-rook-1', name: 'white-rook', url: 'pieces-basic-svg/rook-w.svg', position: 'a1' },
        { id: 'w-knight-1', name: 'white-knight', url: 'pieces-basic-svg/knight-w.svg', position: 'b1' },
        { id: 'w-bishop-1', name: 'white-bishop', url: 'pieces-basic-svg/bishop-w.svg', position: 'c1' },
        { id: 'w-queen', name: 'white-queen', url: 'pieces-basic-svg/queen-w.svg', position: 'd1' },
        { id: 'w-king', name: 'white-king', url: 'pieces-basic-svg/king-w.svg', position: 'e1' },
        { id: 'w-bishop-2', name: 'white-bishop', url: 'pieces-basic-svg/bishop-w.svg', position: 'f1' },
        { id: 'w-knight-2', name: 'white-knight', url: 'pieces-basic-svg/knight-w.svg', position: 'g1' },
        { id: 'w-rook-2', name: 'white-rook', url: 'pieces-basic-svg/rook-w.svg', position: 'h1' }
    );
    console.log(`reset positions - done, pieces - length ${initialPieceArray.length}- ${JSON.stringify({ initialPieceArray })}`)
    return initialPieceArray;
}


resetPositions();
