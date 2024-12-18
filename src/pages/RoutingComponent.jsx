import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import App from "./Chess";
import Home from "./Home";

export default function RoutingComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/chess-game" element={<Home />} />
                <Route path="/chess-game/play" element={<App />} />
            </Routes>
        </Router>
    )
}