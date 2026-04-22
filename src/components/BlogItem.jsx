import Button from "../ui/Button";
import { Link } from "react-router-dom";

function BlogItem({ post }) {
	const { image, date, title } = post;

 
	return (
		<Link to="/read">
			<div className=" hover:shadow-xl   bg-white mb-4 md:mb-0">
				<img
					src={image}
					alt="blog image"
					className="rounded-2xl h-[220px] w-full mb-3 object-cover "
				/>
				<div className="p-3">
					<span className=" date text-sm pb-1 border border-b-2 border-amber-100">
						{date}
					</span>
					<h3 className="font-semibold my-3">{title}</h3>
					<Button >Read More</Button>
				</div>
			</div>
		</Link>
	);
}

export default BlogItem;
