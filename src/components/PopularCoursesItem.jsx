import Button from "./Button";

function PopularCoursesItem({ course }) {
	const { image, title, desc, rate, price, star } = course;

	return (
		<li className=" bg-white shadow-xl ">
			<img src={image} alt="Design Image" className="rounded-2xl" />
			{/* info */}
			<div className="p-5">
				{/* header */}
				<div className="flex items-center justify-between mb-4">
					<h3 className="font-semibold text-xl">{title}</h3>
					<div className="flex items-center gap-3 text-amber-400">
						<span>{star}</span>
						<span>{rate}</span>
					</div>
				</div>
				<p className="primary-text mb-3 ">{desc}</p>
				{/* footer */}
				<div className="flex items-center justify-between">
					<span className="font-semibold text-xl"> ${price}</span>
					<Button> Book now </Button>
				</div>
			</div>
		</li>
	);
}

export default PopularCoursesItem;
