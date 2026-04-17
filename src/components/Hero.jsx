import avatar from "../assets/img/avatar.jpg";
import CourseItem from "./CourseItem";
import des from "../assets/icon/des.svg";
import dev from "../assets/icon/dev.svg";
import marketing from "../assets/icon/marketing.svg";

function Hero() {
	const colorDes = "bg-amber-100";
	const colorDev = "bg-purple-200";
	const colorMar = "bg-blue-200";

	return (
		<div className="container mx-auto py-[3rem] mt-[3rem] ">
			<div className="flex">
				{/* Image */}
				<div className="w-[50%] relative">
					<img
						src={avatar}
						alt="Avatar"
						className="h-[625px] w-[420px] rounded-2xl"
					/>
					{/* summarize */}
					<div className="absolute right-0 top-[50%]  w-[270px] h-[244px] p-6 rounded-2xl bg-white ">
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
				<div></div>
			</div>
		</div>
	);
}

export default Hero;
