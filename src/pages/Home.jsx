
export default function Home() {
    return (
        <>
            <h1>Welcome Player</h1>
            <button
                onClick={() => { window.location.href = `http://localhost:5173/chess-game/play` }}
            >Let's Play Chess</button >
        </>
    )
}