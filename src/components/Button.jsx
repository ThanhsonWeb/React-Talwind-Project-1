function Button({ children }) {
	const base =
		"  px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full  hover:bg-stone-800 hover:text-white transition duration-400 hover:shadow-lg ease-in-out ";

	const className = `${base} `;

	return <button className={className}>{children}</button>;
}

export default Button;
