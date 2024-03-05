import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { BsTwitterX, BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className='grid mt-8 rounded-[20px]'>
			<div className='flex mx-auto gap-x-10 mt-4'>
				<a href='https://twitter.com/code_with_Mi' target='blank'>
					<BsTwitterX className='h-6 w-6 text-white hover:text-green-500' />
				</a>
				<a href='https://github.com/Derryck2020' target='blank'>
					<BsGithub className='h-6 w-6 text-white hover:text-green-500' />
				</a>
				<a href='http://linkedin.com/in/derryck' target='blank'>
					<BsLinkedin className='h-6 w-6 text-white hover:text-green-500' />
				</a>
			</div>
			<div className={`${styles.paddingX} mx-auto  mt-5 pb-0`}>
				<h5>
					&copy; {new Date().getFullYear()} &nbsp;
					<span>Xir Derryck. All rights reserved.</span>
				</h5>
				<h5></h5>
			</div>
		</div>
	);
};

export default SectionWrapper(Footer, '');
