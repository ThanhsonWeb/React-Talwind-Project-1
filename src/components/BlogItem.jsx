import Button from "./Button";

function BlogItem({ post }) {
	const { image, date, title, buttonText } = post;

	return (
		<div className=" hover:shadow-xl  bg-white mb-4 md:mb-0">
			<img
				src={image}
				alt="blog image"
				className="rounded-2xl h-[220px] w-full mb-3 object-cover "
			/>
			<div className="p-3">
				<span className="text-sm pb-1 border border-b-2 border-amber-100">
					{date}
				</span>
				<h3 className="font-semibold my-3">{title}</h3>
				<Button>{buttonText}</Button>
			</div>

			
		</div>
	);
}

export default BlogItem;
