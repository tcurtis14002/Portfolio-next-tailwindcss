import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

function Experience() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left '>
			<h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
				Experience
			</h3>
			<div className='flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
			</div>
		</motion.div>
	);
}

export default Experience;
