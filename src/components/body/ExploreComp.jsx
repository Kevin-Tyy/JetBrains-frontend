import { Typography } from "@mui/material";
import React from "react";
import { Careers } from "./utils/utilObject";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StorageIcon from "@mui/icons-material/Storage";
import AndroidIcon from "@mui/icons-material/Android";
import CodeIcon from "@mui/icons-material/Code";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

const icons = [
	<EmojiEventsIcon/>,
	<StorageIcon/>,
	<AndroidIcon/>,
	<CodeIcon/>,
	<WysiwygIcon/>,
	<ViewInArIcon/>

]

const ExploreComp = () => {
	return (
		<div id="section2" className="flex flex-col w-full lg:w-1250 mx-auto mt-40">
			<div className="w-full lg:w-3/5 px-4 lg:px-0">
				<Typography
					variant="h4"
					sx={{
						mb: "20px",
						fontSize: "37px",
						fontWeight: "bold",
					}}
					className="text-white">
					Explore careers in computer science
				</Typography>
				<Typography variant="body1" className="text-white">
					Do you want to learn more about a specific career
					field? JetBrains Academy will help you prepare for a
					job interview in various professions and make it easier
					to get started in your field.
				</Typography>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-4/5 xl:w-full mt-10 px-5 lg:px-0">
				{Careers.map((career) => (
					<div className="bg-slate-950 p-8 col-span-1   rounded-2xl cursor-pointer hover:outline outline-1 outline-gray-50">
						<Typography
							variant="h6"
							sx={{ my: 2 }}
							className="text-white">
							{career.title}
						</Typography>
						<Typography
							variant="caption"
							sx={{
								lineHeight: '27px',
								fontSize: "18px",
								fontWeight: "bold", 
							}}
							className="text-neutral-500">
							{career.description}
						</Typography>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExploreComp;
