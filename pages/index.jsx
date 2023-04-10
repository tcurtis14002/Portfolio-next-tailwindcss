import Head from "next/head";
import Image from "next/image";
import { Inter, Stick_No_Bills } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
// import { PageInfo, Experience, Project, Skill, Social } from "@/typings";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchPageInfo } from "@/utils/fetchPageINfo";

// type Props = {
// 	pageInfo: PageInfo,
// 	experiences: Experience[],
// 	skills: Skill[],
// 	projects: Project[],
// 	socials: Social[],
// };

export default function Home({
	pageInfo,
	experiences,
	projects,
	skills,
	socials,
}) {
	return (
		<div className='z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
			<Head>
				<title>Tyler's Portfolio</title>
			</Head>

			<Header socials={socials} />
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
				<Experience />
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
}

export const getStaticProps = async () => {
	const pageInfo = await fetchPageInfo();
	const experiences = await fetchExperiences();
	const skills = await fetchSkills();
	const projects = await fetchProjects();
	const socials = await fetchSocials();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},

		// Next.js will attempt to re-generate the page:
		// when a request comes in
		// At most every 100 seconds
		revalidate: 100,
	};
};
