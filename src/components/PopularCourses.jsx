import next from "../assets/icon/next.svg";
import prev from "../assets/icon/prev.svg";
import PopularCoursesItem from "./PopularCoursesItem";
import { courses } from "../fakeAPI";

function PopularCourses() {
	return (
		<div className="container container-space ">
			{/* // Popular-top */}
			<div className="mb-20 px-3">
				<h2 className="header-secondary py-2 mb-4 ">
					Our Popular Courses
				</h2>
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
			<div>
				<ul className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3 md:p-0">
					{courses.map((course) => (
						<PopularCoursesItem key={course.id} course={course} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default PopularCourses;
