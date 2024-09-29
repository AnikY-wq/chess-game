import { useContext } from "react"
import { ChessContext } from "../context/ChessContext"

export const GameTray = () => {
    const { resetPositions, updatePiecePositions } = useContext(ChessContext)

    const handleReset = () => {
        try {
            const resetArray = resetPositions();
            updatePiecePositions(resetArray);
            return;
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div
            onClick={handleReset}
            className="reset-button"
        >
            Reset
        </div>
    )
}

