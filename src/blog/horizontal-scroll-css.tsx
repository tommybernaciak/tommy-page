import { BlogPostPart, PARTS } from './types';

const blogpost: BlogPostPart[] = [
	{ type: PARTS.DATE, content: 'Feb 19, 2019' },
	{ type: PARTS.TITLE, content: 'CSS Horizontal scroll' },
	{
		type: PARTS.PARAGRAPH,
		content:
			'Horizontal scroll is something that I have implemented multiple times in the past. I decided to create a small blog post with instructions on how to do it well. I found many solutions and I found out that two of them are pretty simple to implement. The first one is a bit old-school pre-flex implementation using `inline-block` display property and the second one is using my favorite CSS layout - flex.'
	},
	{ type: PARTS.SUBTITLE, content: "Let's start" },
	{
		type: PARTS.PARAGRAPH,
		content:
			'What we need is a container with a couple of items inside. The code should look like the one below.'
	},
	{
		type: PARTS.CODEBLOCK,
		content: `<div class="container">
  		<div class="item"></div>
  		<div class="item"></div>
  		<div class="item"></div>
  		<div class="item"></div>
  		<div class="item"></div>
  		<div class="item"></div>
</div>`,
		language: 'html'
	},
	{
		type: PARTS.PARAGRAPH,
		content:
			'A container is our div with limited width and when we sum up the widths of each item inside it is bigger than the container width. This means that to display all of the items we need a scroll if we do not allow to have items outside the container. Here is a basic CSS stylesheet for this situation:'
	},
	{
		type: PARTS.CODEBLOCK,
		content: `.container {
	margin: 5px;
	width: 350px;
	height: 100px;
	border: 2px solid #341C09;
	white-space: nowrap;
}
.item {
	border: 2px solid #B85B14;
	background-color: #FC7307;
	width: 120px;
}`,
		language: 'css'
	},
	{
		type: PARTS.SUBTITLE,
		content: 'Horizontal scroll - inline-block solution'
	},
	{
		type: PARTS.PARAGRAPH,
		content:
			'We can use `inline-block` display property to achieve that. This is a bit old way, from before the flex era and you can it is still used in many applications. What we need to do is allow an overflow on a container and set display to `inline-block` on items. We need however to add one trick here - `inline-block` items will be separated by a small space so we need to apply a negative margin to make then stand next to each other.'
	},
	{
		type: PARTS.CODEBLOCK,
		language: 'css',
		content: `
.inline-container {
	vertical-align: middle;
	overflow-x: scroll; 
	}
.inline-item {
	display: inline-block;
	vertical-align: middle;
	height: 96px;
	margin-right: -4px;
}`
	},
	{ type: PARTS.SUBTITLE, content: 'Horizontal scroll with flex' },
	{
		type: PARTS.PARAGRAPH,
		content:
			"A better solution is using flex. Flex display is one of my favorite things in stylesheet styling and I use it very often. Here we need only to apply flex display property to the container and set `0 0 auto` on items `flex` property. Container settings will display all children in a row and item settings will set them to the same order and grow and will keep them next to each other. We also don't allow to wrap items, so we will keep them in one line only and we allow overflow for scrolling to be possible."
	},
	{
		type: PARTS.CODEBLOCK,
		language: 'css',
		content: `
.flex-container {
	display: flex;
	flex-wrap: nowrap; 
	overflow: auto;
}
.flex-item {
	flex: 0 0 auto;
}`
	},
	{ type: PARTS.SUBTITLE, content: 'Check the example' },
	{
		type: PARTS.PARAGRAPH,
		content:
			'You can see and test both on my implementations on a Codepen below. I hope this will help you in your implementation.'
	},
	{ type: PARTS.CODEPEN, user: 'tommybernaciak-the-reactor', hash: 'YBdrRd' }
];

export default blogpost;
