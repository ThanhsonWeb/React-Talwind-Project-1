import feature1 from "../assets/img/feature1.jpg";
import feature2 from "../assets/img/feature2.jpg";
import Button from "./Button";
function Feature() {
	return (
		<div className=" md:flex container container-space gap-20 ">
			{/*images  */}
			<div className="md:flex gap-5 relative w-[100%] md:w-[570px]  mb-8 md:mb-0 ">
				<img
					src={feature1}
					alt="Hacker Black"
					className=" hidden md:block h-[400px] w-[250px] rounded-2xl "
				/>
				<img
					src={feature2}
					alt="Hacker white"
					className="h-[400px] w-[80%]  md:w-[250px] rounded-2xl md:absolute right-0 top-[-20px] object-cover mx-auto md:mx-0 "
				/>
			</div>
			{/* content */}
			<div className="flex flex-col justify-center w-[80%] md:w-[470px] mx-auto md-mx-0 ">
				<h2 className="header-secondary mb-5 ">
					If you never give up You never fail
				</h2>
				<p className="primary-text mb-5">
					90% of people ready to work for other people 20-30 years .. even their
					entire life to get a normal life , but if you can work for yourself
					just 2-3 years then everything change !
				</p>
				<p className="primary-text mb-5">Consistent beats Talent 🔥</p>
				<Button> Sign Up</Button>
			</div>
		</div>
	);
}

export default Feature;
