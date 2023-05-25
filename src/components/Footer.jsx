import { Typography } from "@mui/material";
import React from "react";
import {
	products,
	solutions,
	initiatives,
	community,
	resources,
	company,
	info,
} from "./body/utils/utilObject";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PublicIcon from "@mui/icons-material/Public";
import TranslateIcon from "@mui/icons-material/Translate";
const icons = [
	<TwitterIcon />,
	<LinkedInIcon />,
	<FacebookIcon />,
	<RssFeedIcon />,
	<InstagramIcon />,
	<YouTubeIcon />,
];

const Footer = () => {
	return (
		<div className="bg-neutral-800 pt-12 px-4 xl:px-0">
			<div className="grid grid-cols-2 lg:xl:grid-cols-3 2xl:grid-cols-6 w-full xl:w-3/4 mx-auto border-b border-neutral-500">
				<div className="text-white">
					<Typography variant="body1" className="">
						Products
					</Typography>
					<div className="flex flex-col pb-20">
						{products.map((product) => (
							<li className="list-none mb-2">
								<Typography
									variant="caption"
									className="py-1 text-neutral-400 border-b border-neutral-800  transition duration-200 cursor-pointer hover:border-neutral-400">
									{product}
								</Typography>

							</li>
						))}
					</div>
				</div>
				<div className="text-white">
					<Typography variant="body1">Solutions</Typography>
					<div className="flex flex-col pb-20">
						{solutions.map((solution) => (
							<li className="list-none mb-2">

							<Typography
								variant="caption"
								className="py-1 text-neutral-400 border-b border-neutral-800 transition duration-200  cursor-pointer hover:border-neutral-400">
								{solution}
							</Typography>
							</li>
						))}
					</div>
				</div>
				<div className="text-white">
					<Typography variant="body1" className="">
						Inittiatives
					</Typography>
					<div className="flex flex-col pb-20">
						{initiatives.map((initiatives) => (
							<li className="list-none mb-2">
								<Typography
									variant="caption"
									className="py-1 text-neutral-400 border-b border-neutral-800  transition duration-200 cursor-pointer hover:border-neutral-400">
									{initiatives}
								</Typography>

							</li>
						))}
					</div>
				</div>
				<div className="text-white">
					<Typography variant="body1" className="">
						Commmunity
					</Typography>
					<div className="flex flex-col pb-20">
						{community.map((community) => (
							<li className="list-none mb-2">

								<Typography
									variant="caption"
									className="py-1 text-neutral-400 border-b border-neutral-800  transition duration-200 cursor-pointer hover:border-neutral-400">
									{community}
								</Typography>
							</li>
						))}
					</div>
				</div>
				<div className="text-white">
					<Typography variant="body1" className="">
						Resources
					</Typography>
					<div className="flex flex-col pb-20">
						{resources.map((resources) => (
							<li className="list-none mb-2">

							<Typography
								variant="caption"
								className="py-1 text-neutral-400 border-b border-neutral-800  transition duration-200 cursor-pointer hover:border-neutral-400">
								{resources}
							</Typography>
							</li>
						))}
					</div>
				</div>
				<div className="text-white">
					<Typography variant="body1" className="">
						Company
					</Typography>
					<div className="flex flex-col pb-20">
						{company.map((company) => (
							<li className="list-none mb-2">

								<Typography
									variant="caption"
									className="py-1 text-neutral-400 border-b border-neutral-800  transition duration-200 cursor-pointer hover:border-neutral-400">
									{company}
								</Typography>
							</li>
						))}
					</div>
				</div>
			</div>
			<div className="flex flex-col xl:flex-row mx-auto justify-between w-full xl:w-3/4 mt-10">
				<div>
					<div className="text-white py-5">
						{icons.map((icon) => (
							<span className="hover:bg-neutral-800 p-2 ">
								{icon}
							</span>
						))}
					</div>
					<div className="py-5">
						<ul className="flex flex-wrap text-neutral-400">
							{info.map((info) => (
								<li className="pr-4 xl:pr-10">
									<Typography variant="caption" className="whitespace-nowrap">
										{info}
									</Typography>
								</li>
							))}
						</ul>
					</div>
				
				</div>
				<div>
					<div className="flex gap-10 mb-4">
						<button className="text-white hover:bg-neutral-500/30 flex gap-2 items-center px-4 rounded-full py-2">
							<PublicIcon />
							<Typography>Rwanda</Typography>
						</button>
						<button className="text-white hover:bg-neutral-500/30 flex gap-2 items-center px-4 rounded-full">
							<TranslateIcon />
							<Typography>English</Typography>
						</button>
					</div>
	
				</div>

			</div>
			<div className="flex flex-col xl:flex-row mx-auto justify-between w-full xl:w-3/4 pb-20">
					<div>
					<Typography
						variant="caption"
						className="text-neutral-400">
						Copyright © 2000-2023 JetBrains s.r.o.
					</Typography>
					</div>

					<div className="text-neutral-400">
					<Typography variant="caption">
						Developed with drive and
						<span className="hover:border-b border-neutral-700 pb-1">
							IntelliJ IDEA
						</span>
					</Typography>
					</div>
				</div>
		</div>
	);
};

export default Footer;

