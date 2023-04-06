import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Projects() {
	const projects = [1, 2, 3];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative z-0 mx-auto flex h-screen max-w-[2000px] flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left xl:flex-row '>
			<h3 className='absolute top-24 min-h-screen text-2xl uppercase tracking-[20px] text-gray-500 xl:space-y-0'>
				Projects
			</h3>

			<div className='relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll '>
				{projects.map((project, i) => {
					<div className='flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44'>
						<motion.img
							initial={{
								y: -100,
								opacity: 0,
							}}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src='/belgium_bg.jpg'
							alt=''
							className=''
						/>
						<div className='max-w-6xl space-y-10 px-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 md:px-10'>
							<h4>Case Study {i + 1} of 3: Reddit Clone</h4>
							<span className='underline decoration-[#F7AB0A]/50'></span>
							<p className='text-center text-lg md:text-left'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Totam repellat vitae nobis fuga earum odit obcaecati quam
								aut, veritatis, dolores dignissimos omnis sint! Molestias
								earum iste necessitatibus illo, odit dicta magnam voluptas
								magni ea delectus praesentium. Laborum fuga inventore cum!
							</p>
						</div>
					</div>;
				})}
			</div>

			<div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10 blur-[2px]' />
		</motion.div>
	);
}

export default Projects;
