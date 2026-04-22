function Dots({ currentIndex }) {
	return (
		<div className="flex gap-2  ">
			<div
				className={`w-3 h-3 rounded-full ${currentIndex === 0 ? " bg-amber-500" : " bg-amber-900"} `}
			></div>
			<div
				className={`w-3 h-3 rounded-full ${currentIndex === 1 ? " bg-amber-500" : " bg-amber-900"} `}
			></div>
			<div
				className={`w-3 h-3 rounded-full ${currentIndex === 2 ? " bg-amber-500" : " bg-amber-900"} `}
			></div>
			
		</div>
	);
}

export default Dots;
