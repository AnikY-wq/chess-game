/**
 * Chess Board structure would be like, 
 * 8 • • • • • • • •
 * 7 • • • • • • • •
 * 6 • • • • • • • •
 * 5 • • • • • • • •
 * 4 • • • • • • • •
 * 3 • • • • • • • •
 * 2 • • • • • • • •
 * 1 • • • • • • • •
 *   A B C D E F G H 
 */

export const alphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const boardArray = new Array(64).fill("").map((el, i) => {
    const row = 7 - Math.floor(i / 8)   // since moving horizontally,
    const col = alphas[i % 8]
    return {
        id: `${col}${row + 1}`,
        color: (Math.floor(i / 8) + i) % 2 == 0 ? "white" : "black",
        pieceId: ""
    }
})
