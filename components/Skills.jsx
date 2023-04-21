import { motion } from "framer-motion";
import Skill from "./Skill";
import { useState } from "react";
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

function Skills() {
	const [skill, setSkill] = useState(null);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative mx-auto flex h-screen max-w-[2000px] flex-col items-center justify-evenly px-10 text-center sm:px-1 md:flex-row md:text-left xl:flex-row'>
			<h3 className='absolute top-24 min-h-screen text-center text-2xl uppercase tracking-[20px] text-gray-500 xl:space-y-0'>
				Skills
			</h3>
			<h3 className='absolute top-36 text-center text-sm uppercase tracking-[3px] text-gray-500'>
				Hover for current proficiency
			</h3>
			<div className='grid w-fit sm:grid-cols-2 sm:gap-2 sm:px-1 md:grid-cols-4 md:gap-5'>
				<Skill
					directionLeft={true}
					src={react.src}
					proficiency={react.proficiency}
				/>
				<Skill
					directionLeft={true}
					src={js.src}
					proficiency={js.proficiency}
				/>
				<Skill
					directionLeft={true}
					src={tailwindcss.src}
					proficiency={tailwindcss.proficiency}
				/>
				<Skill
					directionLeft={true}
					src={ts.src}
					proficiency={ts.proficiency}
				/>
				<Skill
					src={vsCode.src}
					proficiency={vsCode.proficiency}
				/>
				<Skill
					src={node.src}
					proficiency={node.proficiency}
				/>
				<Skill
					src={next.src}
					proficiency={next.proficiency}
				/>
				<Skill
					src={sanity.src}
					proficiency={sanity.proficiency}
				/>
			</div>
		</motion.div>
	);
}

export default Skills;
