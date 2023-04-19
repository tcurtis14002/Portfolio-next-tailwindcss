import React from "react";
import { motion } from "framer-motion";

function ExperienceCard({ work }) {
	let i = 0;
	return (
		<article
			className='flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929]
			p-10
			opacity-40
			transition-opacity
			duration-200
			hover:opacity-100
			md:w-[450px]'>
			<motion.img
				className='h-32 w-32 rounded-full object-cover object-center md:rounded-full xl:h-[200px] xl:w-[200px]'
				src={work.src}
				alt='image of experience'
				height={100}
				width={100}
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			/>

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>{work.title}</h4>
				<p className='mt-1 text-2xl font-bold'>{work.company}</p>
				<p className='py-5 uppercase text-gray-300'>
					Started: {work.started} Ended: {work.ended}
				</p>
				<ul className='ml-5 list-disc space-y-4 text-lg'>
					{work.summary.map((point) => (
						<li key={i++}>{point}</li>
					))}
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
