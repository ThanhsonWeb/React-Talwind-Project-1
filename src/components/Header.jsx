import logo from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Header() {
	return (
		<div className=" container  m-auto p-6  flex items-center  justify-between">
			{/* logo */}
			<img src={logo} alt="Lesson." className="h-8" />

			{/* Nav */}
			<nav>
				<ul className="flex items-center space-x-3 ">
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

			{/* Cta */}
			<Button>Sign Up</Button>
		</div>
	);
}

export default Header;
