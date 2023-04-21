import React from "react";
import { motion } from "framer-motion";

function ExperienceCard({ work }) {
	let i = 0;
	return (
		<article
			className='mt-16 flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929]
			p-10
			transition-opacity
			duration-200
			hover:opacity-100
			sm:w-[325px]
			sm:opacity-100
			md:w-[450px]
			md:opacity-40'>
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
				<p className='sm:py-1uppercase py-2 text-gray-300'>
					Started: {work.started}
				</p>
				<p className='sm:py-1uppercase py-2 text-gray-300'>
					Ended: {work.ended}
				</p>
				<ul className='md:text-md ml-5 list-disc space-y-4 text-base sm:space-y-2 sm:text-sm'>
					{work.summary.map((point) => (
						<li
							key={i++}
							className='text-just
						px-1'>
							{point}
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
