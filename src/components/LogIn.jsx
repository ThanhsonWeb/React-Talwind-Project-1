import feature1 from "../assets/img/feature1.jpg";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function LogIn() {
	const { username, setUsername } = useUser();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		navigate("/");
	}

	return (
		<div
			style={{
				backgroundImage: `url(${feature1})`,
			}}
			className=" flex items-center justify-center   z-10 fixed  inset-0  text-white bg-cover bg-center  "
		>
			<div className="w-[90%] md:w-[50%] z-20 ">
				<form
					onSubmit={handleSubmit}
					style={{
						backgroundImage: `url(${feature1})`,
					}}
					className="  relative  md:w-full p-8 sm:p-12 md:p-17  rounded-2xl  bg-cover bg-center text-amber-50 "
				>
					<button
						className=" p-3 absolute top-[1%] right-[1%] text-2xl md:text-4xl hover:scale-125 transition-transform duration-300"
						onClick={() => navigate("/")}
					>
						X
					</button>
					<div className="text-center">
						<h2 className="text-4xl mb-3 font-semibold ">Log In</h2>
						<span className="">
							Don't have a Account ?
							<Link to="/signup">
								<strong className="text-sm text-blue-300 underline">
									Sign Up
								</strong>
							</Link>
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
						<label className="text-xl block mb-3 " htmlFor="password">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="border w-full p-2 rounded-xl focus:ring, focus:outline-none  "
							placeholder="your password...."
							required
						/>
					</div>

					<button
						type="submit"
						className="mt-8 bg-yellow-600 text-white px-6 py-2 rounded-xl hover:bg-yellow-500"
					>
						Log in
					</button>
				</form>
			</div>
		</div>
	);
}

export default LogIn;
