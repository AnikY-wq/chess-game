import { Link } from "react-router-dom"
import { config } from "../utils/constants"

export default function Home() {
    return (
        <>
            <h1>Welcome Player</h1>
            <Link to={'/chess-game/play'}>
                <button>Let's Play Chess</button >
            </Link>
        </>
    )
}