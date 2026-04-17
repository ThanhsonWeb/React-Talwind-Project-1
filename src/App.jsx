import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";

function App() {
	return (
		<>
			<Header />
			{/* BrowRouter wrap App in Main.jsx */}
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/reviews" element={<Reviews />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
