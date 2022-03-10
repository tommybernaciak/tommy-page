import { BlogPostListElement, BlogPostPart, PARTS } from './types';
import hscroll from './horizontal-scroll-css';

const findTitle = (post: BlogPostPart[]) => {
	const title = post.find((part: BlogPostPart) => part.type === PARTS.TITLE);
	return title?.content || '';
};

const findDate = (post: BlogPostPart[]) => {
	const title = post.find((part: BlogPostPart) => part.type === PARTS.DATE);
	return title?.content || '';
};

export const blogposts: BlogPostListElement[] = [
	{
		title: findTitle(hscroll),
		url: '/blog/horizontal-scroll-css',
		date: findDate(hscroll),
		content: hscroll,
		intro: 'Horizontal scroll is something that I have implemented multiple times in the past. I decided to create a small blog post with instructions on how to do it well. I found many solutions and I found out that two of them are pretty simple to implement. The first one is a bit old-school pre-flex implementation using `inline-block` display property and the second one is using my favorite CSS layout - flex.'
	}
];
