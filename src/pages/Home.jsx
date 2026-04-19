import Hero from "../components/Hero";
import PopularCourses from "../components/PopularCourses";
import Feedback from "../components/Feedback";
import Feature from "../components/Feature";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
function Home() {
	return (
		<div>
			<Hero />
			<PopularCourses />
			<Feedback />
			<Feature />
			<Blog />
			<Footer />
		</div>
	);
}

export default Home;
