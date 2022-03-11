import { FunctionComponent, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { blogposts } from '../blog/blogposts';
import { BlogPostListElement } from '../blog/types';

const Blog: FunctionComponent = (): ReactElement => {
	return (
		<div className="px-6 md:px-20 lg:px-48 py-20 w-full lg:w-[580px] mx-auto prose dark:prose-invert h-fit prose-img:mx-auto">
			<ul className="list-none flex flex-col gap-1">
				{blogposts.map((post: BlogPostListElement) => {
					return (
						<li key={post.url} className="mb-2">
							<Link
								className=" gap-2.5 p-4 rounded-md text-sm flex items-center justify-between text-gray-300 hover:text-gray-200 hover:bg-gray-700 cursor-pointer"
								to={post.url}
							>
								<div className="w-1/5 text-gray-500 text-xs md:text-base">
									{post.date}
								</div>
								<div className="w-4/5 flex flex-col">
									<div className="text-base md:text-2xl md:pb-6 text-gray-300">
										{post.title}
									</div>
									<div className="hidden md:block text-ellipsis">
										{post.intro}
									</div>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Blog;
