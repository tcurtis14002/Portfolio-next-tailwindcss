import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { travel } from "../data/projectsData";
import TravelProject  from "./TravelProject";
import ApiProject from "./ApiProject";
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
			className='relative z-0 mx-auto flex h-screen max-w-[2000px] flex-col items-center justify-evenly text-center md:flex-row md:text-left xl:flex-row '>
			<h3 className='border-box align-center z-9999 absolute top-24 min-h-screen items-center text-center text-2xl uppercase tracking-[20px] text-gray-500 xl:space-y-0'>
				Projects
			</h3>
			<div className='border-box  relative z-20 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
				<ApiProject />
				<TravelProject />
			</div>
			<div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10 blur-[2px]' />
		</motion.div>
	);
}

export default Projects;
