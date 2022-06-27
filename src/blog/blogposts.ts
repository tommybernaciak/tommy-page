import { BlogPostListElement, BlogPostPart, Date, PARTS, Title } from './types';
import hscroll from './horizontal-scroll-css';
import usetransition from './use-transition';

const findTitle = (post: BlogPostPart[]) => {
	const title = post.find((part: BlogPostPart) => part.type === PARTS.TITLE);
	return (title as Title)?.content || '';
};

const findDate = (post: BlogPostPart[]) => {
	const date = post.find((part: BlogPostPart) => part.type === PARTS.DATE);
	return (date as Date)?.content || '';
};

export const blogposts: BlogPostListElement[] = [
	{
		title: findTitle(usetransition),
		url: '/blog/use=transition-react-hook',
		date: findDate(usetransition),
		content: usetransition,
		intro: 'In React all updates have the same priority by default. A heavy and non-urgent task can slow down a task that is light but urgent. With react 18 you can enable the concurrent mode which allows to prioritize UI updates.'
	},
	{
		title: findTitle(hscroll),
		url: '/blog/horizontal-scroll-css',
		date: findDate(hscroll),
		content: hscroll,
		intro: 'Horizontal scroll is something that I have implemented multiple times in the past. I decided to create a small blog post with instructions on how to do it well. I found many solutions and I found out that two of them are pretty simple to implement. The first one is a bit old-school pre-flex implementation using `inline-block` display property and the second one is using my favorite CSS layout - flex.'
	}
];
