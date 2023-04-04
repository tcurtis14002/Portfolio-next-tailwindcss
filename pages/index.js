import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className='z-0 z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white'>
			<Head>
				<title>Tyler's Portfolio</title>
			</Head>

			<Header />
			{/* Hero */}
			<section
				id='hero'
				className='snap-start'>
				<Hero />
			</section>
			{/* About */}
			<section
				id='about'
				className='snap-center'>
				<About />
			</section>
			{/* Experience */}

			{/* Skills */}

			{/* Projects */}

			{/* Contact Me */}
		</div>
	);
}
