import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			{/* BrowRouter wrap App in Main.jsx */}
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/about" element={<About />} />
					<Route path="/reviews" element={<Reviews />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
