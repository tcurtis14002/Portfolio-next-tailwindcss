import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
	const aboutPic = "/../public/amsterdam.JPG";
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 md:flex-row md:text-left'>
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
				}}>
				<Image
					height={500}
					width={500}
					viewport={{ once: true }}
					transition={{ duration: 1.2 }}
					src={aboutPic}
					className='md:h-95 md: -mb-20 h-60 w-60 flex-shrink-0 rounded-full object-cover md:mb-0 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]'
				/>
			</motion.div>

			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{" "}
					<span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
					background:
				</h4>
				<p className='text-base'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
					error fugit sed repudiandae saepe temporibus perspiciatis dolorem
					vel, asperiores possimus facilis quidem at alias! Soluta dolorem
					labore cumque quam tempore!
				</p>
			</div>
		</motion.div>
	);
}

export default About;
