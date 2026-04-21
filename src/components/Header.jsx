import logo from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Header() {
	const classPc = "hidden md:block md:flex items-center space-x-3 ";
	const [isOpen, setIsOpen] = useState(false);
	// use Context API
	const { username, setUsername } = useUser();

	const navigate = useNavigate();

	return (
		<div className="   mx-auto p-6  flex items-center  justify-between bg-[#fffcf4] px-4 md:px-10 ">
			{/*  control the sidebar*/}
			{isOpen ? (
				<MobileNav setIsOpen={setIsOpen} />
			) : (
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

			<img src={logo} alt="Lesson." className=" mx-auto md:mx-0 h-8" />
			<Navigation classPc={classPc} />
			{/* Cta */}
			{username !== "" ? (
				<button
					onClick={() => setUsername("")}
					className="text-md md:text-xl font-semibold p-1 md:p-2 text-amber-100 bg-amber-800 rounded-2xl shadow-2xl"
				>
					{username}
				</button>
			) : (
				<Button onClick={() => navigate("/signup")}>Sign Up</Button>
			)}
		</div>
	);
}

export default Header;
