import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative mx-auto flex h-screen max-w-[2000px] flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left xl:flex-row '>
			<h3 className='absolute top-24 min-h-screen text-2xl uppercase tracking-[20px] text-gray-500 xl:space-y-0'>
				Skills
			</h3>

			<h3 className='absolute top-36 text-sm uppercase tracking-[3px] text-gray-500'>
				Hover for current proficiency
			</h3>
			<div className='grid grid-cols-4 gap-5'>
				<Skill directionLeft={true} />
				<Skill directionLeft={true} />
				<Skill directionLeft={true} />
				<Skill directionLeft={true} />
				<Skill directionLeft={true} />
				<Skill directionLeft={true} />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
			</div>
		</motion.div>
	);
}

export default Skills;
