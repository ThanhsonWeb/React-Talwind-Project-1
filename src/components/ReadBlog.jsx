import hacker from "../assets/img/john.jpg"

function ReadBlog() {
	return (
		<div className="container container-space   md:flex  items-center gap-10 bg- p-5 shadow-2xl rounded-2xl mb-20">
			<div className=" md:w-[70%]">
				<h1 className="text-5xl font-semibold text-center text-amber-900 ">What Is Life?</h1>
				<p className="primary-text mt-3">
					<strong className="text-2xl">Life</strong> is the aspect of existence that processes, acts, reacts,
					evaluates, and evolves through growth (reproduction and metabolism).
					The crucial difference between life and non-life (or non-living
					things) is that life uses energy for physical and conscious
					development. Life is anything<b> that grows and eventually dies</b>, i.e.,
					ceases to proliferate and be cognizant. Can we say that viruses, for
					example, are cognizant? Yes, insofar as they react to stimuli; but
					they are alive essentially<u>
					they are alive essentially    because they reproduce and grow. Computers
   					are non-living because even though they ca
					they are alive essentially</u>n cognize, they do not
					develop biologically (grow), and cannot produce offspring. <b>
					develop biologically (grow), and cannot produce offspring.    It is not
   					cognition that determines life
					develop biologically (grow), and cannot produce offspring. </b>, then: it is rather proliferation and
					maturation towards a state of death; and death occurs only to living
					substances. Or is the question, ‘What is the meaning (purpose) of
					life?’ That’s a real tough one. <u>
					life?’ That’s a real tough one.    But I think that the meaning of life
   					is the ideals we impose upon it, what we demand of it
					life?’ That’s a real tough one. </u>. I’ve come to
					reaffirm my Boy Scout motto, give or take a few words, that the
					meaning of life is to: Do good, Be Good, but also to Receive Good. The
					<i>
					   foggy term in this advice, of course, is ‘good’; but I leave that to
   					the intuitive powers that we all share.
					</i>
					
				</p>
			</div>
			<div className="w-[30%]">
				<img src={hacker} alt="hacker" className=" hidden md:block rounded-2xl shadow-2xl" />
			</div>
		</div>
	);
}

export default ReadBlog;
