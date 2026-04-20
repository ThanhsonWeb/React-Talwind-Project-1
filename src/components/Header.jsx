import logo from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import Form from "./Form";
import feature2 from "../assets/img/feature2.jpg";
function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const classPc = "hidden md:block md:flex items-center space-x-3 ";
	const [isForm, setIsForm] = useState(false);
	const [username, setUsername] = useState("");

	function handleClick() {
		setIsForm(!isForm);
	}

	return (
		<div className=" container  m-auto p-6  flex items-center  justify-between">
			{/*  mobile responsive*/}
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

			{isForm && (
				<div
					style={{
						backgroundImage: `url(${feature2})`,
					}}
					className=" flex items-center justify-center   z-10 fixed  top-0 left-0 bottom-0 right-[0%]  text-white bg-cover bg-center  "
				>
					<Form
						username={username}
						setUsername={setUsername}
						setIsForm={setIsForm}
						handleClick={handleClick}
					/>
				</div>
			)}

			{/* logo */}
			<img src={logo} alt="Lesson." className=" mx-auto md:mx-0 h-8" />
			{/* Nav */}
			<Navigation classPc={classPc} />
			{/* Cta */}
			{username !== "" ? (
				<button
					onClick={() => setUsername("")}
					className="text-xl font-semibold p-2 text-amber-100 bg-amber-800 rounded-2xl shadow-2xl"
				>
					{username}
				</button>
			) : (
				<Button onClick={handleClick}>Sign Up</Button>
			)}
		</div>
	);
}

export default Header;
