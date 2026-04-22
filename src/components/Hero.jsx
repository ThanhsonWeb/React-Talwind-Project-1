import avatar from "../assets/img/avatar.jpg";
import CourseItem from "./CourseItem";
import des from "../assets/icon/des.svg";
import dev from "../assets/icon/dev.svg";
import marketing from "../assets/icon/marketing.svg";
import Button from "../ui/Button";
import play from "../assets/icon/play.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Hero() {
	const colorDes = "bg-amber-100";
	const colorDev = "bg-purple-200";
	const colorMar = "bg-blue-200";

	const navigate = useNavigate();

	return (
		<div className=" py-10 bg-[#f8f4e9] px-2 md:px-10 ">
			<div className="md:flex">
				{/* Image */}
				<div className="md:w-[50%] relative">
					<img
						src={avatar}
						alt="Avatar"
						className=" mx-auto md:mx-0  h-[400px] w-[80%] md:h-[625px] md:w-[420px] rounded-2xl  mb-4  object-cover object-[30%_25%] "
					/>
					{/* summary card */}
					<div className="absolute right-0 top-[50%]  w-[270px] h-[244px] p-6 rounded-2xl bg-white  shadow-lg ">
						<CourseItem color={colorDes} icon={des} title="20 courses">
							UI/UX Design
						</CourseItem>
						<CourseItem color={colorDev} icon={dev} title="30 courses">
							Development
						</CourseItem>
						<CourseItem color={colorMar} icon={marketing} title="20 courses">
							Marketing
						</CourseItem>
					</div>
				</div>

				{/* Content */}
				<div className=" w-full md:w-1/2 flex flex-col justify-center p-10 mt-15 ">
					<h1 className=" font-sen  text-center md:text-left text-4xl md:text-5xl font-semibold  leading-[40px] md:leading-[58px] mb-8 md:mb-5 ">
						Learn without limits and spread knowledge
					</h1>
					<p className=" primary-text leading-[30px]  mb-5 ">
						Build new skills for that "this is my year" feeling with course
						,certificates, and degrees from world-class universities and
						companies.
					</p>
					{/* cta */}
					<div className="flex gap-8 mb-8  mx-auto md:mx-0">
						<Button>
							<Link to="/courses">See Courses</Link>
						</Button>
						<div className="flex items-center gap-7">
							<button
								onClick={() => navigate("/video")}
								className="p-4 rounded-full bg-white  shadow-lg"
							>
								<img src={play} alt="play" />
							</button>
							<span className="font-semibold shadow-blue-700">Watch Video</span>
						</div>
					</div>

					<p className="primary-text mb-3 text-center md:text-left">
						Recent engagement
					</p>

					<div className="flex space-x-5">
						<p className="primary-text">
							<strong className="text-4xl">50K</strong> Students
						</p>
						<p className="primary-text">
							<strong className="text-4xl">70+</strong> Courses
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
