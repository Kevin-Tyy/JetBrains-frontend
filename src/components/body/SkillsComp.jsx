import React from "react";
import { Skillset } from "./utils/utilObject";
import { Typography, Box } from "@mui/material";

const SkillsComp = () => {
	return (
		<div id="section3">
			<div className="flex flex-col xl:flex-row items-center justify-center w-full xl:w-1250 px-4 xl:px-0 xl:mx-auto gap-2 xl:gap-40 xl:mt-20 mb-10">
				<Box className="w-full xl:w-1/2 mx-10 xl:mx-0 mt-10">
					<Typography variant="h4" className="text-white py-5">
						Advance your skills
					</Typography>
					<Typography
						variant="body1"
						sx={{ lineHeight: 2 }}
						className="text-white ">
						Whether you are an experienced developer looking
						to advance your skills or a curious learner eager
						to build up your knowledge, we have learning
						materials about specific topics to get you
						covered.
					</Typography>
				</Box>

				<Box className="grid grid-cols-3 xl:gap-10 ml-3 xl:ml-0 gap-x-4  xl:gap-x-10">
					{Skillset.map((skill) => (
						<div className="xl:mx-2 my-3 border border-neutral-700 p-7 flex flex-col items-center justify-between rounded-xl sm:w-36  h-40 hover:border-neutral-200 cursor-pointer">
							<img
								src={skill.poster}
								alt={skill.name}
								className="w-12 mb-5"
							/>
							<Typography
								variant="body1"
								sx={{ fontWeight: 900 }}
								className="text-neutral-200">
								{skill.name}
							</Typography>
						</div>
					))}
				</Box>
			</div>
			<div className="w-full bg-indigo-400 p-7 flex items-center justify-center">
				<Typography
					variant="h6"
					sx={{ fontWeight: "bold" }}
					className="text-white text-center hover:border-b border-white cursor-pointer">
					Study offline with the academic programs at our
					partners’ universities
					<span>&nbsp;&rarr;</span>
				</Typography>
			</div>
		</div>
	);
};

export default SkillsComp;
