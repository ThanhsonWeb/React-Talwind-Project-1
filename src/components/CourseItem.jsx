function CourseItem({ children, title, icon, color }) {
	return (
		<div className="  flex items-center  space-x-3  px-3 py-1.5 ">
			<div className={` p-2.5 ${color} rounded-full `}>
				<img src={icon} alt="icon" />
			</div>
			<div className="flex flex-col space-y-2 ">
				<span>{title}</span>
				<h4 className="font-semibold text-xl">{children}</h4>
			</div>
		</div>
	);
}

export default CourseItem;
