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
		title: 'Redux Saga Pattern for React',
		date: 'Feb 3, 2020',
		href: 'https://tommybernaciak.hashnode.dev/redux-saga-pattern-for-react'
	},
	{
		title: 'Clean up request in the useEffect React Hook',
		date: 'Aug 28, 2019',
		href: 'https://tommybernaciak.hashnode.dev/clean-up-request-in-the-useeffect-react-hook'
	}
];
