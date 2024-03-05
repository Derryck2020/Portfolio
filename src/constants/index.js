import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	flowers,
	pavel,
	jobit,
	tripguide,
	threejs,
	eden,
	groovy,
	mbooks,
	steps,
	ceo,
	kofi,
} from '../assets';

export const navLinks = [
	{
		id: 'me',
		title: 'me',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'connect',
		title: 'Connect',
	},
];

const services = [
	{
		title: 'Frontend Developer',
		icon: web,
	},
	{
		title: 'Figma',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
];

const experiences = [
	{
		title: 'Full stack Developer',
		company_name: 'mBooks',
		icon: flowers,
		iconBg: '#E6DEDD',
		date: 'August 2023 - Present',
		points: [
			'Designing and developing user interfaces (UI) for the companys ecommerce website using React.js, JSX, and other frontend technologies.',
			'Optimizing frontend performance by implementing techniques like code splitting, lazy loading, and bundle size reduction to enhance page load times and overall site speed, improving user experience and conversion rates.',
			'Implemented a responsive design and ensuring cross-browser compatibility.',
			'Implementing security best practices to protect user data, sensitive information, and ecommerce transactions from security threats, vulnerabilities, and attacks',
		],
	},
	{
		title: 'React.js Developer',
		company_name: 'Eagle Heights',
		icon: tripguide,
		iconBg: '#383E56',
		date: 'Feb 2023 - May 2023',
		points: [
			'Designing and implementing user interfaces using React.js, ensuring a seamless and visually appealing shopping experience for customers.',
			'Engaging with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'De-piperX innovations',
		icon: jobit,
		iconBg: '#E6DEDD',
		date: 'October 2022 - December 2022',
		points: [
			'Designing and developing the user interface (UI) of the website using HTML, CSS, and JavaScript, ensuring a visually appealing and user-friendly experience.',
			'Collaborating with stakeholders to gather and understand requirements for the website, including functionality, design, and content management needs.',
			'Optimizing the website content and structure to improve its visibility and ranking in search engine results pages.',
			'Ensuring that the website is responsive and accessible across various devices and screen sizes.',
		],
	},
	{
		title: 'React.js Developer',
		company_name: 'Indigo',
		icon: pavel,
		iconBg: '#383E56',
		date: 'Jan 2022 - March 2023',
		points: [
			'Collaborating with designers to create intuitive and user-friendly interfaces that provide an engaging and seamless browsing experience for visitors',
			'Ensuring that the ecommerce website complies with accessibility standards and guidelines.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Using version control systems like Git and collaborating with other developers, designers, and stakeholders.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'The web application navigation is straightforward and user-friendly. I was able to explore different sections effortlessly. A job well done!',
		name: 'Alice Snow',
		designation: 'CEO',
		company: 'Eden Interior',
		image: ceo,
	},
	{
		testimonial:
			"Absolutely love the seamless shopping experience! The app's intuitive interface makes finding and purchasing products a breeze.",
		name: 'Roland Akepe',
		designation: 'Marketer',
		company: 'GreenPasture Ltd',
		image: steps,
	},
	{
		testimonial:
			"Convenient, efficient, and reliable!  Our traffic increased by 60% due to optimization done by Derryck. We can't thank him enough!",
		name: 'Gand Kofi',
		designation: 'Accountant',
		company: 'BTB Company',
		image: kofi,
	},
];

const projects = [
	{
		name: 'Eden Interior',
		description:
			'An Ecommerce platform that allows users to search, filter and choose quality home interior products from various lists. ',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'Axios',
				color: 'green-text-gradient',
			},
			{
				name: 'styled Components',
				color: 'pink-text-gradient',
			},
		],
		image: eden,
		source_code_link: 'https://eden-interior.netlify.app/',
	},
	{
		name: 'mBooks API',
		description:
			'Introducing our Books API: Streamline book data retrieval with ease. Access comprehensive information on titles, authors, genres, and more seamlessly.',
		tags: [
			{
				name: 'express',
				color: 'blue-text-gradient',
			},
			{
				name: 'postman',
				color: 'green-text-gradient',
			},
			{
				name: 'mongoDB',
				color: 'pink-text-gradient',
			},
		],
		image: mbooks,
		source_code_link: 'https://mbooks.nelify.app/',
	},
	{
		name: 'Groovy',
		description:
			'A full stack web application with features similar to TikTok. You can sign up and upload videos whiles at same, watching videos posted by others.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'typescript',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind css',
				color: 'pink-text-gradient',
			},
			{
				name: 'zustand',
				color: 'green-text-gradient',
			},
		],
		image: groovy,
		source_code_link: 'https://groovy-beta.vercel.app/',
	},
];

export { services, technologies, experiences, testimonials, projects };
