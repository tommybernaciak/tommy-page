import { BlogPostPart, PARTS } from './types';

const blogpost: BlogPostPart[] = [
	{ type: PARTS.DATE, content: 'Jun 27, 2022' },
	{ type: PARTS.TITLE, content: 'useTransition() React hook' },
	{
		type: PARTS.PARAGRAPH,
		content:
			'In React all updates have the same priority by default. A heavy and non-urgent task can slow down a task that is light but urgent. With react 18 you can enable the concurrent mode which allows to prioritize UI updates.'
	},
	{ type: PARTS.SUBTITLE, content: 'How it looks like' },
	{
		type: PARTS.CODEBLOCK,
		content: `const [isPending, startTransition] = useTransition();`,
		language: 'javascript'
	},
	{
		type: PARTS.PARAGRAPH,
		content: 'isPending: is a flag that allows you to do an action when transition is pending.'
	},
	{
		type: PARTS.PARAGRAPH,
		content:
			'startTransition(callback): allows you to mark any UI updates inside callback as transitions.'
	},
	{ type: PARTS.SUBTITLE, content: 'How it works' },
	{
		type: PARTS.PARAGRAPH,
		content: 'Here is an example component:'
	},
	{
		type: PARTS.CODEBLOCK,
		content: `function FilterList() {
	const [filterTerm, setFilterTerm] = useState('');
	const filteredProducts = filterProducts(filterTerm);

	const updateFilterHandler = (event) => {
		setFilterTerm(event.target.value);
	}

	return (
		<div>
			<input type="text" onChange={updateFilterHandler} />
			<ProductList products={filteredProducts} />
		</div>
	);
}`,
		language: 'jsx'
	},
	{
		type: PARTS.PARAGRAPH,
		content:
			'When input is changed, filter term is updated and filterProducts function is fired. In this example component, input can get slowed down by the expensive filtering function. Input change is an urgent task - user must see changes while he types. On the other hand, showing updated product list is non-urgent task - user can wait a sec to see actual results. The useTransition() hook can help separate urgent input update from non-urgent list filtering update. '
	},
	{
		type: PARTS.CODEBLOCK,
		content: `function FilterList() {
	const [isPending, startTransition] = useTransition();
	const [filterTerm, setFilterTerm] = useState('');
	const filteredProducts = filterProducts(filterTerm);

	const updateFilterHandler = (event) => {
		startTransition(() => {
			setFilterTerm(event.target.value);
		});
	}

	return (
		<div>
			<input type="text" onChange={updateFilterHandler} />
			{isPending ? 
				<p>Loading list...</p>
				: <ProductList products={filteredProducts} />
			}
		</div>
	);
}`,
		language: 'jsx'
	},
	{
		type: PARTS.PARAGRAPH,
		content:
			'With useTransition() React UI updates can be easily prioritized. Did you find it useful for your project?'
	}
];

export default blogpost;
