import React from "react";
import { Link } from "react-scroll";
import LearnComp from "./LearnComp";
import ExploreComp from "./ExploreComp";
import SkillsComp from "./SkillsComp";
import ShareComp from "./ShareComp";
import Community from "./Community";
import "./pagination.css";
const PagePagination = () => {
	return (
		<div className="w-full ">
			<div className="hidden sm:flex pagination-container bg-black/50 text-white justify-center border-t border-b border-gray-700">
				<ul className="flex justify-center items-centery list-none border border-white ">
					<li>
						<Link
							activeClass="active"
							to="section1"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							Learn languages
						</Link>
					</li>
					<li px-4>
						<Link
							activeClass="active"
							to="section2"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							Explore careers 	
						</Link>
					</li>
					<li px-4>
						<Link
							activeClass="active"
							to="section3"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							Advanced skills
						</Link>
					</li>
					<li px-4>
						<Link
							activeClass="active"
							to="section4"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							Share knowledge
						</Link>
					</li>
				</ul>
			</div>

			<LearnComp />
			<ExploreComp />
			<SkillsComp />
			<ShareComp />
			<Community/>
		</div>
	);
};

export default PagePagination;
