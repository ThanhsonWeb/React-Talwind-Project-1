import Hero from "../components/Hero";
import PopularCourses from "../components/PopularCourses";
import Feedback from "../components/Feedback";
import Feature from "../components/Feature";
import Blog from "../components/Blog";
function Home() {
	return (
		<div>
			<Hero />
			<PopularCourses />
			<Feedback />
			<Feature />
			<Blog />
		</div>
	);
}

export default Home;
