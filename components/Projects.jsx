import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { travel } from "../data/projectsData";
import { Project } from "./Project";
import Icon from "./Icon";
import {
	react,
	tailwindcss,
	js,
	node,
	next,
	vsCode,
	ts,
	sanity,
} from "../data/skillData";

function Projects() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative z-0 mx-auto flex h-screen max-w-[2000px] flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left xl:flex-row '>
			<h3 className='absolute top-24 min-h-screen text-2xl uppercase tracking-[20px] text-gray-500 xl:space-y-0'>
				Projects
			</h3>

			<div className='relative z-20 flex w-full snap-x snap-mandatory overflow-x-hidden overflow-y-hidden '>
				<div className='flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'>
					<motion.img
						initial={{
							y: -100,
							opacity: 0,
						}}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						src='/coming_soon.jpg'
						alt='image with text saying coming soon'
						className='h-72 w-72 rounded-sm '
					/>
					<div className='max-w-6xl space-y-10 px-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 md:px-10'>
						<div className='flex flex-row items-center justify-around'>
							<h3 className='pr-10 text-3xl'>Travel Page</h3>
							<div className='border-box flex flex-row items-center justify-center space-x-5'>
								<Icon
									src={react.src}
									proficiency={react.proficiency}
								/>
								<Icon
									src={tailwindcss.src}
									proficiency={tailwindcss.proficiency}
								/>
								<Icon
									src={next.src}
									proficiency={next.proficiency}
								/>
							</div>
						</div>

						<span className='underline decoration-[#F7AB0A]/50'></span>
						<p className='text-center text-lg md:text-left'>
							This is a content management page showcasing breathtaking
							photography from around the world using an interactive map,
							blogs written about countries greatest vacation spots, and a
							feature even helping you to decide details for your next
							trip.
						</p>
					</div>
				</div>
				;
			</div>

			<div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10 blur-[2px]' />
		</motion.div>
	);
}

export default Projects;
