import feature2 from "../assets/img/feature2.jpg";

function Form({ username, setUsername, setIsForm, handleClick }) {
	function handleSubmit(e) {
		e.preventDefault();
		alert("Welcome to the real world");
		setIsForm(false);
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				style={{
					backgroundImage: `url(${feature2})`,
				}}
				className="  relative  w-[36rem] p-16  rounded-2xl  bg-cover bg-center text-amber-50"
			>
				<button
					className=" p-3 absolute top-[1%] right-[1%] text-4xl hover:scale-125 transition-transform duration-300"
					onClick={handleClick}
				>
					X
				</button>
				<div className="text-center">
					<h2 className="text-4xl mb-3 ">Sign Up</h2>
					<span className="">
						Already have a Account ?{" "}
						<strong className="text-sm text-blue-300 underline">Log in</strong>
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
				<div className="mt-5">
					<label className="text-xl block mb-3 " htmlFor="email">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="border w-full p-2 rounded-xl focus:ring, focus:outline-none "
						required
					/>
				</div>
				<div className="mt-5">
					<label className="text-xl block mb-3 " htmlFor="number">
						Phone number
					</label>
					<input
						type="number"
						id="number"
						name="number"
						className="border w-full p-2 rounded-xl focus:ring, focus:outline-none "
						required
					/>
				</div>
				<button
					type="submit"
					className="mt-8 bg-yellow-600 text-white px-6 py-2 rounded-xl hover:bg-yellow-500"
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Form;
