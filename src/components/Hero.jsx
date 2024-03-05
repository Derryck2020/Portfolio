import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
	return (
		<section className='relative w-full h-screen mx-auto'>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-[#915eff]' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hey, I'm &nbsp;
						<span className='text-[#4BE62E]'>Derryck</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						Let's transform your Ideas into&nbsp;
						<br className='sm:block hidden' />
						Digital Reality, One Byte at a Time.
					</p>
				</div>
			</div>

			<ComputersCanvas />

			<div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
				<a href='#me'>
					<div className='w-[30px] h-[56px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
						<motion.dev
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className='w-2 h-2 rounded-full bg-secondary'
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
