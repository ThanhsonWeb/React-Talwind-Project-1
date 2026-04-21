import { posts } from "../BlogAPI";
import BlogItem from "./BlogItem";
import Dots from "./Dots";
function Blog() {
	return (
		<div className="container-space bg-amber-50">
			{/* BLog-header */}
			<div className="  flex flex-col text-center mb-10">
				<h2 className="header-secondary mb-5 mx-auto">Our Blog</h2>
				<p className="primary-text w-[90%] md:w-md mx-auto ">
					Read our regular travel blog and know the latest update of tour and
					travel
				</p>
			</div>

			{/* Blog-list */}
			<ul className=" flex flex-col md:grid md:grid-cols-3 gap-3">
				{posts.map((post) => (
					<BlogItem key={post.id} post={post} />
				))}
			</ul>
			<div className="mt-10 ml-[50%] hidden md:block">
				<Dots />
			</div>
		</div>
	);
}

export default Blog;
