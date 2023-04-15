import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
	return (
		<div className='z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
			<Head>
				<title>Tyler's Portfolio</title>
			</Head>

			<Header />
			<section
				id='hero'
				className='snap-start'>
				<Hero />
			</section>
			<section
				id='about'
				className='snap-center'>
				<About />
			</section>
			<section
				id='experience'
				className='snap-center'>
				<WorkExperience />
			</section>
			<section
				id='skills'
				className='snap-start'>
				<Skills />
			</section>
			<section
				className='snap-center'
				id='projects'>
				<Projects />
			</section>
			<section
				className='snap-center'
				id='contact'>
				<Contact />
			</section>
		</div>
	);
};
export default Home;
