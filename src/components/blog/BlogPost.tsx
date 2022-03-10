import { FunctionComponent, ReactElement } from 'react';
import { CodeBlock, nord } from 'react-code-blocks';
import { BlogPostPart, PARTS } from '../../blog/types';
import Heading from '../typography/Heading';
import P from '../typography/P';
import SubTitle from '../typography/SubTitle';

interface IProps {
	blogpost: BlogPostPart[];
}

const BlogPost: FunctionComponent<IProps> = ({ blogpost }): ReactElement => {
	return (
		<div className="px-6 md:px-20 lg:px-48 py-20 w-full lg:w-[580px] mx-auto prose dark:prose-invert h-fit prose-img:mx-auto">
			{blogpost.map((part: BlogPostPart, i: number) => {
				switch (part.type) {
					case PARTS.TITLE: {
						return <Heading key={i} text={part.content} />;
					}
					case PARTS.SUBTITLE: {
						return <SubTitle key={i} text={part.content} />;
					}
					case PARTS.PARAGRAPH: {
						return <P key={i} text={part.content} />;
					}
					case PARTS.CODEBLOCK: {
						return (
							<div
								key={i}
								style={{
									fontFamily: 'Courier'
								}}
								className="pb-6"
							>
								<CodeBlock
									text={part.content}
									language={part.language}
									showLineNumbers={false}
									theme={nord}
								/>
							</div>
						);
					}
					default: {
						return <>invalid</>;
					}
				}
			})}
		</div>
	);
};

export default BlogPost;
