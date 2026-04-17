import avatar from "../assets/img/avatar.jpg";
import CourseItem from "./CourseItem";
import des from "../assets/icon/des.svg";
import dev from "../assets/icon/dev.svg";
import marketing from "../assets/icon/marketing.svg";
import Button from "./Button";
import play from "../assets/icon/play.svg";

function Hero() {
	const colorDes = "bg-amber-100";
	const colorDev = "bg-purple-200";
	const colorMar = "bg-blue-200";

	return (
		<div className="container mx-auto py-[3rem] mt-[3rem] ">
			<div className="md:flex">
				{/* Image */}
				<div className="w-[50%] relative">
					<img
						src={avatar}
						alt="Avatar"
						className="h-[625px] w-[420px] rounded-2xl"
					/>
					{/* summarize */}
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
				<div className="w-[50%] flex flex-col justify-center p-10 ">
					<h1 className=" font-sen text-5xl font-semibold leading-[58px] mb-5 ">
						Learn without limits and spread knowledge
					</h1>
					<p className=" primary-text leading-[30px]  mb-5 ">
						Build new skills for that "this is my year" feeling with course
						,certificates, and degrees from world-class universities and
						companies.
					</p>
					{/* cta */}
					<div className="flex gap-8 mb-8">
						<Button>See Courses</Button>
						<div className="flex items-center gap-7">
							<div className="p-4 rounded-full bg-white  shadow-lg">
								<img src={play} alt="play" />
							</div>
							<span className="font-semibold shadow-blue-700">Watch Video</span>
						</div>
					</div>

					<p className="primary-text mb-3">Recent engagement</p>

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
