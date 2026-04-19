import king from "../assets/img/king.jpg";
import openQuote from "../assets/icon/open-quote.svg";
import Dots from "./Dots";

function Feedback() {
	return (
		<div className=" container-space bg-[#2E2100]  ">
			<div className="md:flex items-center justify-between px-10 py-10  ">
				{/* left */}
				<div className="w-[200px] mb-12 md:mb-0 mx-auto md:mx-0   ">
					<img
						src={king}
						alt=""
						className="w-[5rem] h-[5rem] rounded-full object-cover object-top mb-4 "
					/>
					<p className="text-white font-semibold text-xl mb-2">
						David Laid
					</p>
					<span className="text-sm text-[#BFBCB2] ">
						Bodybuilder likes coding
					</span>
					<div className="mt-4">
						<Dots />
					</div>
				</div>
				{/* right */}
				<div className="md:max-w-xl lg:max-w-2xl relative p-4">
					<img
						src={openQuote}
						alt="Open-quote Icon"
						className="absolute top-[-10px] left-[-10px] "
					/>
					<p className=" text-white text-xl  ">
						Not only does my resume look impressive—filled with the names and
						logos of world-class institutions—but these certificates also bring
						me closer to my career goals by validating the skills I've
						learned."{" "}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Feedback;
