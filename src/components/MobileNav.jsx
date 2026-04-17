import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo-white.svg";
import Navigation from "./Navigation";

function MobileNav({ setIsOpen }) {
	const classMobile = "flex  flex-col text-xl space-y-2  text-stone-300";
	return (
		// sidebar
		<div className="fixed top-0 left-0 h-full w-2/3 z-10 bg-gradient-to-r from-yellow-800 to-yellow-600 p-8 ">
			{/* header */}
			<div className="flex items-center justify-between mb-4   border-b">
				{/* logo */}
				<img src={logo} alt="logo" />
				{/* close button */}
				<button
					className="p-2 rounded focus:outline-none"
					onClick={() => setIsOpen(false)}
				>
					<svg
						className="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			{/* nav */}
			<Navigation classMobile={classMobile} />
		</div>
	);
}

export default MobileNav;
