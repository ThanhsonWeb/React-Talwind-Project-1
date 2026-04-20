import { NavLink } from "react-router-dom";

function Navigation({ classPc, classMobile }) {
	return (
		<nav>
			<ul className={`${classPc} md:${classMobile}`}>
				{/* click move to that path -> use @apply for link */}
				<li>
					<NavLink to="/" className="link">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/courses" className="link">
						Courses
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" className="link">
						About Us
					</NavLink>
				</li>
				<li>
					<NavLink to="/reviews" className="link">
						Reviews
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
