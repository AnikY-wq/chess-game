import { config } from "../utils/constants"

export default function Home() {
    return (
        <>
            <h1>Welcome Player</h1>
            <button
                onClick={() => { window.location.href = `${config.home}/play` }}
            >Let's Play Chess</button >
        </>
    )
}