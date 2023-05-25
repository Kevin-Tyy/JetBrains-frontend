import React from "react";
import { Typography } from "@mui/material";
const ShareComp = () => {
	return (
		<div id="section4">
			
			<div className="bg-indigo-950">
				<div className="w-full xl:w-1250  px-4 xl:mx-auto py-4">
					<Typography variant="h4" sx={{ mb: 3,  fontSize: { xs : '30px', lg: '40px'}}} className="text-white">
						Share your knowledge
					</Typography>
					<Typography variant="h6" sx={{ lineHeight: 2 , mb: 2, fontSize: { xs : '17px', lg: '20px'}}} className="text-white">
						Do you want to share your programming skills with your
						students, coworkers, or subscribers? JetBrains Academy
						helps learners truly enjoy programming with interactive
						courses you create right in your JetBrains IDE.
					</Typography>

					<button className="text-left py-3  border border-gray-300 w-40 flex text-white justify-center rounded-3xl hover:bg-neutral-500/20">
					Learn more
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShareComp;
