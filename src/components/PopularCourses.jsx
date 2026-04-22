import next from "../assets/icon/next.svg";
import prev from "../assets/icon/prev.svg";
import PopularCoursesItem from "./PopularCoursesItem";
import { courses } from "../fakeAPI";
import { useState } from "react";
import Button from "../components/Button";

function PopularCourses() {
	// const visibleCourses = courses.slice(0, 3);
	const [showAll, setShowAll] = useState(false);

	const visibleCourses = showAll ? courses : courses.slice(0, 3);

	return (
		<div className="container container-space ">
			{/* // Popular-top */}
			<div className="mb-20 px-3">
				<h2 className="header-secondary py-2 mb-4 ">Our Popular Courses</h2>
				<div className="md:flex items-center justify-between">
					<p className="primary-text md:w-[450px] mb-4 md:mb-0">
						Build new skills with trendy courses and shine for the next future
						career.
					</p>

					<div className=" hidden md:block flex gap-8">
						<button className="p-4 rounded-full border border-yellow-200">
							<img src={prev} alt="previous" />
						</button>
						<button className="p-4 rounded-full border border-yellow-200 bg-amber-400">
							<img src={next} alt="next" />
						</button>
					</div>
				</div>
			</div>
			{/* Popular list */}
			<div className="">
				<ul className="grid grid-cols sm:grid-cols-2 md:grid-cols-3  gap-3  ">
					{visibleCourses.map((course) => (
						<PopularCoursesItem key={course.id} course={course} />
					))}
				</ul>
			</div>
			{/* toggle button */}
			<div className="flex items-center justify-center mt-10">
				{/* {!showAll && courses.length < 3 ? (
					<Button onClick={() => setShowAll(true)}>Show more</Button>
				) : (
					<Button onClick={() => setShowAll(false)}>Show Less</Button>
				)} */}
				<Button onClick={() => setShowAll(!showAll)}>
					{showAll ? "Show Less" : "Show More"}
				</Button>
			</div>
		</div>
	);
}

export default PopularCourses;
