import { Typography, Box } from "@mui/material";
import React from "react";
import { langObj } from "./utils/utilObject";

const LearnComp = () => {
	return (
		<div id="section1">
			<div className="flex flex-col xl:flex-row items-center justify-center w-full xl:w-1250 px-4 xl:px-0 xl:mx-auto gap-2 xl:gap-40 xl:mt-20">
				<Box className="w-full xl:w-1/2 mx-10 xl:mx-0 mt-10">
					<Typography variant="h4" className="text-white xl:py-5">
						Learn a programming language
					</Typography>
					<Typography
						variant="body1"
						sx={{ lineHeight: 2 }}
						className="text-white ">
						Select a language and try different approaches to
						learn it. Build real-world projects, follow guided
						interactive courses, participate in programming
						contests, and tackle gamified missions. Find what
						works best for you and enjoy programming!
					</Typography>
					<button className="text-white border bg-transparent border-white py-3 px-4 my-10 rounded-3xl hover:bg-neutral-900">
						<Typography variant="body1">
							Not Sure where to start
						</Typography>
					</button>
				</Box>

				<Box className="grid xs:grid-cols-3 sm:grid-cols-4 xl:grid-cols-4 gap-x-4  xl:gap-x-10 ">
					{langObj.map((lang) => (
						<div className="xl:mx-2 my-3 border border-neutral-700 p-7 flex flex-col items-center justify-between rounded-xl sm:w-36  h-40 hover:border-neutral-200 cursor-pointer">
							<img
								src={lang.poster}
								alt={lang.name}
								className="w-12 mb-5"
							/>
							<Typography
								variant="body1"
								sx={{ fontWeight: 900 }}
								className="text-neutral-200">
								{lang.name}
							</Typography>
						</div>
					))}
				</Box>
			</div>
		</div>
	);
};

export default LearnComp;
