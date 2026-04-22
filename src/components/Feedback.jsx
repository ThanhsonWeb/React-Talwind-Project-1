import openQuote from "../assets/icon/open-quote.svg";
import Dots from "../ui/Dots";
import { feedbacks } from "../service/feedbackAPI.js";
import { useState } from "react";
import next from "../assets/icon/next.svg";

function Feedback() {
	// b1 create state to store ...
	const [currentIndex, setCurrentIndex] = useState(0);

	// b2 only one feedback visible (single object)
	const currentFeedback = feedbacks[currentIndex];

	function handlePrev() {
		if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
	}

	function handleNext() {
		if (currentIndex < 2) setCurrentIndex(currentIndex + 1);
	}

	return (
		<div className=" container-space bg-[#2E2100] px-10 py-10  ">
			<div
				key={currentFeedback.id}
				className="md:flex items-center justify-between "
			>
				{/* left */}
				<div className="w-[200px] mb-12 md:mb-0 mx-auto md:mx-0   ">
					<img
						src={currentFeedback.img}
						alt=""
						className="w-[5rem] h-[5rem] rounded-full object-cover object-top mb-4 "
					/>
					<p className="text-white font-semibold text-xl mb-2">
						{currentFeedback.name}
					</p>
					<span className="text-sm text-[#BFBCB2] ">
						{currentFeedback.role}
					</span>
					<div className="mt-4">
						{/* b3: highlight based on currentIndex */}
						<Dots currentIndex={currentIndex} />
					</div>
				</div>
				{/* right */}
				<div className="md:max-w-xl lg:max-w-2xl relative p-4">
					<img
						src={openQuote}
						alt="Open-quote Icon"
						className="absolute top-[-10px] left-[-10px] "
					/>
					<p className=" text-white text-xl  ">{currentFeedback.quote}</p>
				</div>
			</div>

			{/* btn */}
			<div className=" flex justify-center  gap-8 ">
				<button
					onClick={handlePrev}
					className="p-4 rounded-full border border-yellow-200 cursor-pointer select-none hover:bg-amber-400   active:scale-95 rotate-180"
				>
					<img src={next} alt="previous" />
				</button>
				<button
					onClick={handleNext}
					className="p-4 rounded-full border border-yellow-200 hover:bg-amber-400 active:scale-95 cursor-pointer select-none"
				>
					<img src={next} alt="next" />
				</button>
			</div>
		</div>
	);
}

export default Feedback;
