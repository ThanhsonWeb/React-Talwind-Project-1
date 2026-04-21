function LogIn({ username, setUsername }) {
	return (
		<div>
			<form
				className="  relative  md:w-full p-8 sm:p-12 md:p-17  rounded-2xl  bg-cover bg-center text-amber-50"
			>
				<div className="text-center">
					<h2 className="text-4xl mb-3 font-semibold ">Log In</h2>
					<span className="">
						Don't have a Account ?
						<strong className="text-sm text-blue-300 underline">Sign Up</strong>
					</span>
				</div>
				<div className="mt-5">
					<label className="text-xl block mb-3 " htmlFor="name">
						Full Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="border w-full p-2 rounded-xl focus:ring, focus:outline-none  "
						placeholder="your name...."
						required
					/>
				</div>
			</form>
		</div>
	);
}

export default LogIn;
