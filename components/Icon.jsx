import React from "react";
import { MotionConfig } from "framer-motion";
import {
	react,
	tailwindcss,
	js,
	node,
	next,
	vsCode,
	ts,
	sanity,
} from "../pages/skillData";

import { motion } from "framer-motion";

function Icon({ src, proficiency }) {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				initial={{ x: 200, opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className='xl:h-26 xl:w-26 h-16 w-16 rounded-full border border-gray-500 object-cover  filter ease-in-out md:h-20 md:w-20'
				src={src}
			/>
			<div className='xl:h-26 xl:w-26 absolute z-0 h-16 w-16  rounded-full opacity-0 md:h-20 md:w-20'>
				<div className='flex h-full items-center justify-center'>
					<p className='text-3xl font-bold text-black opacity-100'>
						{proficiency}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Icon;
