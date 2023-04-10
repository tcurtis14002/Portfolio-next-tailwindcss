import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import type {
	PageInfo,
	Experience,
	Project,
	Skill,
	Social,
} from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { GetStaticProps } from "next";

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({
	pageInfo,
	experiences,
	projects,
	skills,
	socials,
}: Props) => {
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

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

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
export default Home;
