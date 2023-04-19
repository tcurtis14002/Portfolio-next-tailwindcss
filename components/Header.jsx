import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
	return (
		<header className='sticky top-0 z-20 mx-auto flex max-w-6xl items-start justify-between p-5 xl:items-center '>
			{/* Social Header */}
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex flex-row items-center'>
				<div className='border-box flex flex-row items-center'>
					<SocialIcon
						className='mr-3 cursor-pointer rounded-full border border-transparent transition-all hover:border-[#F7AB0A]/40'
						network='twitter'
						url='https://twitter.com/_tc10'
						fgColor='gray'
						bgColor='transparent'
						target='_blank'
					/>
					<SocialIcon
						className='hover: hover:fg-[#F7AB0A]/40 cursor-pointer rounded-full border border-[#242424] transition-all hover:border-[#F7AB0A]/40 '
						network='linkedin'
						url='https://www.linkedin.com/in/tyler-curtis-b86563272/'
						fgColor='gray'
						bgColor='transparent'
						target='_blank'
					/>
				</div>
			</motion.div>

			{/* Email Header */}
			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex cursor-pointer flex-row items-center text-gray-300'>
				<SocialIcon
					className='cursor-pointer'
					network='email'
					fgColor='gray'
					bgColor='transparent'
				/>
				<p className=' hidden text-sm uppercase text-gray-400 decoration-[#F7AB0A]/40 underline-offset-4 transition-all hover:underline md:inline-flex'>
					Get in Touch
				</p>
			</motion.div>
		</header>
	);
}
