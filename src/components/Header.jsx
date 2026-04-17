import logo from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const classPc = "hidden md:block md:flex items-center space-x-3 ";

	return (
		<div className=" container  m-auto p-6  flex items-center  justify-between">
			{/*  mobile responsive*/}
			{isOpen ? (
				<MobileNav setIsOpen={setIsOpen} />
			) : (
				// icon bars
				<button
					className="md:hidden p-2 rounded focus:outline-none"
					// b1 : click btn -> appear MobileNav
					onClick={() => setIsOpen(true)}
				>
					{/* Hamburger icon */}
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			)}

			{/* logo */}
			<img src={logo} alt="Lesson." className=" mx-auto md:mx-0 h-8" />
			{/* Nav */}
			<Navigation classPc={classPc} />
			{/* Cta */}
			<Button>Sign Up</Button>
		</div>
	);
}

export default Header;
