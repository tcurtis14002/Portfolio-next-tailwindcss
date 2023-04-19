import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true }}
			className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'>
			<h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
				About
			</h3>
			<motion.div
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				viewport={{ once: true }}>
				<Image
					height={500}
					width={500}
					transition={{ duration: 1.2 }}
					src='/amsterdam.jpg'
					alt='picture of developer'
					className='md:h-95 md: -mb-20 h-60 w-60 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]'
				/>
			</motion.div>

			<div className='max-w-md space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{" "}
					<span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
					background:
				</h4>
				<p className='text-base'>
					I really enjoy learning and doing new things, which is a nice way
					of putting I HATE being bored. I am constantly planning my next
					adventure to a new city or remote land, challenging myself
					physically by running, climbing, and hiking, or spending time
					with my dog Shay.
				</p>

				<p>
					When it comes to web development, I am beyond passionate. I left
					my former career in healthcare to join the best career field in
					modern times. I truly enjoy collaberating on projects and
					thinking outside the box to come up with creative solutions for
					complexe problems.
				</p>
			</div>
		</motion.div>
	);
}

export default About;
