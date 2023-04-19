import React from "react";
import { motion } from "framer-motion";
import { BsPhone } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (formData) => {
		window.location.href = `mailto:twcurtis14002@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. This is my message: ${formData.message}`;
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left '>
			<div className='flex flex-col space-y-10'>
				<h4 className='text-center text-4xl font-semibold'>
					I&apos;m looking forward to helping you achieve your goals.{" "}
					<span className='underline decoration-[#F7AB0A]/50'>
						Let&apos;s connect.
					</span>
				</h4>
				<div className='flex flex-col items-center justify-center space-x-5 space-y-10'>
					<div className='flex items-center'>
						<BsPhone className='h-9 w-9 animate-pulse text-[#F7AB0A]' />
						<p className='pl-3 text-2xl'>(813) 546-2465</p>
					</div>
					<div className='flex items-center'>
						<HiOutlineMail className='h-9 w-9 animate-pulse text-[#F7AB0A]' />
						<p className='pl-3 text-2xl'>twcurtis14002@gmail.com</p>
					</div>
					<div className='flex items-center'>
						<FaMapPin className='h-9 w-9 animate-pulse text-[#F7AB0A]' />
						<p className='pl-3 text-2xl'>St. George, UT</p>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className=' mx-auto flex w-fit flex-col space-y-2'>
						<div className='flex space-x-2'>
							<input
								className='contactInput'
								type='text'
								placeholder='Name'
								{...register("name")}
							/>
							<input
								className='contactInput'
								type='email'
								placeholder='Email'
								{...register("email")}
							/>
						</div>
						<input
							className='contactInput'
							type='text'
							placeholder='Subject'
							{...register("subject")}
						/>
						<textarea
							className='contactInput'
							placeholder='Message'
							{...register("message")}
						/>
						<button className='px rounded-md bg-[#F7AB0A] px-10 py-5 text-lg font-bold text-[#242424]'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</motion.div>
	);
}

export default Contact;
