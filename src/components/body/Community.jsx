import { Typography } from "@mui/material";
import React from "react";
import { people } from "./utils/utilObject";
import logo from '../images/jetBrains.png'
const Community = () => {
	return (
		<div className="">
			<div className="flex flex-col w-full items-center pb-40 px-4 xl:px-0">
				<Typography
					variant="h4"
					sx={{ my: 8 }}
					className="text-white">
					Join a community of over a million learners and
					educators!
				</Typography>
				<div className="flex flex-col xl:grid grid-cols-3 w-full xl:w-1250 gap-20 ">
					{people.map((person) => (
						<div>
							<div className="flex items-center gap-5 m-4">
								<img
									src={person.poster}
									alt={person.name}
									className="w-20 h-20 rounded-full object-cover"
								/>
								<div>
									<Typography
										variant="h6"
										className="text-white">
										{person.name}
									</Typography>
									<Typography
										variant="body1"
										className="text-neutral-400">
										{person.title}
									</Typography>
								</div>
							</div>
							<Typography
								variant="body1"
								sx={{ lineHeight: '26px' }}
								className="text-neutral-400">
								{person.description}
							</Typography>
							<Typography
								variant="body1"
								sx={{ mt: 4 }}
								className="text-white hover:border-b border-white absolute cursor-pointer ">
								Read the full interview &rarr;
							</Typography>
						</div>
					))}
				</div>
			</div>
            <div className="flex flex-col w-full justify-center items-center bg-gradient-to-r from-indigo-800 to-purple-800 ">
                <div className="w-full xl:w-1250 px-2 py-8">
                    <Typography variant="h4" sx={{ mb : 3}} className="text-white">
                    JetBrains Academy for your organization
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight : 2}} className="text-white w-full  2xl:w-850">
                    No matter what industry you’re in or what size your company is, JetBrains Academy is well-equipped to meet your needs. Make sure your team stays up to date with programming languages and new technologies, and manage their learning process easily.
                    </Typography>
					<div className="flex mt-10">
                    <button className="bg-white text-black py-2  px-4 sm:px-10   rounded-3xl cursor-pointer whitespace-nowrap">
                        <Typography variant="body1">
                            Learn more

                        </Typography>
                    </button>
                    <button className="bg-transprent text-white py-2 px-5 sm:px-10 ml-5  border border-white rounded-3xl cursor-pointer hover:bg-neutral-500/30 whitespace-nowrap">
                        <Typography variant="body1">
                            Contact Sales

                        </Typography>
                    </button>

					</div>
                </div>
            </div>
			<div className="flex flex-col xl:flex-row  items-center justify-around pt-10">
				<div className="flex items-center">
					<img src={logo} alt="jetBrains log" className="w-24"/>
					<Typography variant="h6" className="text-white">
						Get started with JetBrains Academy today

					</Typography>
				</div>
				<div>
					<button  className="bg-transparent text-white border border-neutral-700 m-4 py-1 px-3 rounded-full hover:border-neutral-200 hover:bg-neutral-900/50">
						<Typography variant="caption">
							Learn by doing
						</Typography>
					</button>
					<button  className="bg-transparent text-white border border-neutral-700 m-4 py-1 px-3 rounded-full hover:border-neutral-200 hover:bg-neutral-900/50">
						<Typography variant="caption" >
							Study in an IDE
						</Typography>
					</button>
					<button  className="bg-transparent text-white border border-neutral-700 m-4 py-1 px-3 rounded-full hover:border-neutral-200 hover:bg-neutral-900/50">
						<Typography variant="caption" >
							Educate others
						</Typography>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Community;
