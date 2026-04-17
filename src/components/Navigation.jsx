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
					<NavLink to="/pricing" className="link">
						Pricing
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
