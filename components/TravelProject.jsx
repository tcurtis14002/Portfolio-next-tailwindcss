import React from "react";
import { motion } from "framer-motion";

function TravelProject() {
	return (
		<a
			href=''
			target='_blank'>
			<article
				className='max-w-8/10 mx-auto mt-16 flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg
			p-10
	'>
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
					className='h-58 w-58 rounded-sm md:h-52 md:w-52'
				/>
				<div className=''>
					<div className='flex flex-row items-center justify-around'>
						<h3 className=' text-center text-3xl'>Netflix Clone</h3>
					</div>
				</div>
				<div>
					<span className='underline decoration-[#F7AB0A]/50'></span>
					<p className='align-center text-center text-lg md:text-left'>
						This is a complete Netflix clone, complete with user sign in
						using Firebase, purchase subscription plans using Stripe, and
						up to date movie information from TMDB. Build with React Redux.
					</p>
				</div>
			</article>
		</a>
	);
}

export default TravelProject;
