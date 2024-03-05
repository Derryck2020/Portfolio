import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className='xs:w-[240px] w-full'>
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
				>
					<img
						src={icon}
						alt={title}
						className='w-16 h-16 object-contain'
					/>
					<h3 className='text-white text-[20px] text-center font-bold'>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>meet me</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
			>
				An adept software developer with in-depth knowledge in TypeScript
				and JavaScript. I have experience in React, Node.js and other
				frameworks. I'm a quick learner and collaborate closely with clients
				in crafting robust and interactive web applications. Proficient in
				leveraging the power of React's front-end capabilities and
				harnessing the versatility of Node.js for scalable server-side
				solutions. Let's work together to bring your ideas to life!
			</motion.p>
			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'me');
