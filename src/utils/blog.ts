export interface IBlogPost {
	title: string;
	date: string;
	href: string;
}

export const blog: IBlogPost[] = [
	{
		title: 'useTransition() React hook',
		date: 'Jun 27, 2022',
		href: 'https://tommybernaciak.hashnode.dev/usetransition-react-hook'
	},
	{
		title: 'A missing Jest mock feature',
		date: 'Mar 10, 2020',
		href: 'https://medium.com/@tommybernaciak/a-missing-jest-mock-feature-b89b74d7a09c'
	},
	{
		title: 'Redux Saga Pattern for React',
		date: 'Feb 3, 2020',
		href: 'https://tommybernaciak.hashnode.dev/redux-saga-pattern-for-react'
	},
	{
		title: 'Clean up request in the useEffect React Hook',
		date: 'Aug 28, 2019',
		href: 'https://tommybernaciak.hashnode.dev/clean-up-request-in-the-useeffect-react-hook'
	},
	{
		title: 'CSS Horizontal scroll',
		date: 'Feb 19, 2019',
		href: 'https://medium.com/@tommybernaciak/css-horizontal-scroll-25625e65af9'
	},
	{
		title: 'Image Optimization — Lazy Loading for Angular using lazysizes',
		date: 'Aug 22, 2018',
		href: 'https://medium.com/@tommybernaciak/image-optimization-lazy-loading-for-angular-using-lazysizes-1b8a1fb8e1f8'
	},
	{
		title: 'Subscribe your users to Mailchimp with Gibbon',
		date: 'Mar 22, 2018',
		href: 'https://medium.com/@tommybernaciak/subscribe-your-users-to-mailchimp-with-gibbon-1ffa8c19b4e5'
	},
	{
		title: 'React and Flux for Beginners',
		date: 'Feb 23, 2018',
		href: 'https://medium.com/@tommybernaciak/react-and-flux-for-beginners-821ef3d4d9fd'
	},
	{
		title: 'Angular on Rails. How to start?',
		date: 'Feb 6, 2018',
		href: 'https://medium.com/@tommybernaciak/angular-on-rails-how-to-start-37e3851ffb60'
	}
];
