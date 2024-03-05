import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { slink } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
			>
				<div className='relative w-full h-[230px]'>
					<img
						src={image}
						alt={name}
						className='w-full h-full object-cover rounded-2xl'
					/>
				</div>
				<div className='flex  justify-between mt-5'>
					<h3 className='text-secondary font-bold text-[24px]'>{name}</h3>
					<div
						onClick={() => window.open(source_code_link, '_blank')}
						className='flex w-10 h-10 justify-center items-center cursor-pointer'
					>
						<img
							src={slink}
							alt='link to application'
							className='w-1/2 h-1/2 object-contain'
						/>
					</div>
				</div>
				<p className='mt-2 text-white text-[14px]'>{description}</p>
				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p key={tag.name} className={`text-[14px] ${tag.color}`}>
							{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Explore latest</p>
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p className='mt-3 text-[17px] max-w-3xl leading-[30px]'>
					In my latest web development projects, innovation meets
					functionality as I dive into the realm of cutting-edge
					technology. Fueled by a passion for creating dynamic user
					experiences, I've crafted a range of versatile and responsive
					websites. Harnessing the power of modern frameworks and
					libraries, such as React and Typescript, I've constructed
					platforms that not only captivate audiences visually but also
					ensure seamless navigation. Leveraging the latest web standards,
					I've integrated sleek animations and intuitive user interfaces,
					pushing the boundaries of what's possible on the web. Each
					project is a testament to the art of harmonizing design and
					development, catering to the nuanced needs of users while
					maintaining performance excellence.
				</motion.p>
			</div>
			<div className='mt-20 flex flex-wrap gap-7'>
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, '');
