import video from "../assets/img/video.mp4";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import feature3 from "../assets/img/feature3.jpg";
function Video() {
	const navigate = useNavigate();
	const { username } = useUser();

	return (
		<div
			style={{
				backgroundImage: `url(${feature3})`,
			}}
			className=" flex items-center justify-center absolute fixed inset-0  bg-cover bg-center"
		>
			<button
				className=" text-white p-3 absolute top-[5%] right-[5%] text-5xl hover:scale-125 transition-transform duration-300"
				onClick={() => navigate("/")}
			>
				X
			</button>
			<div>
				<h2 className="font-semibold text-3xl text-center mb-5 text-amber-50 text-center ">
					Welcome ! <br /> {username}
				</h2>
				<video src={video} controls className="rounded-2xl"></video>
			</div>
		</div>
	);
}

export default Video;
