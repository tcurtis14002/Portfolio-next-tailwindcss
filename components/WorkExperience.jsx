import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import {
	army,
	largo,
	moffitt,
	eu17,
	eu19,
	spain,
	codecademy,
} from "../data/experienceData";

function WorkExperience() {
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
				<ExperienceCard work={army} />
				<ExperienceCard work={codecademy} />
				<ExperienceCard work={eu17} />
				<ExperienceCard work={largo} />
				<ExperienceCard work={eu19} />
				<ExperienceCard work={spain} />
				<ExperienceCard work={moffitt} />
			</div>
		</motion.div>
	);
}

export default WorkExperience;
