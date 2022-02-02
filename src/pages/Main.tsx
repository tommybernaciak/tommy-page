import { FunctionComponent, ReactElement } from 'react';
import Heading from '../components/typography/heading';

const Main: FunctionComponent = (): ReactElement => {
	return (
		<div className="px-6 md:px-20 lg:px-48 py-20 w-full lg:w-[580px] mx-auto prose dark:prose-invert h-fit prose-img:mx-auto">
			<Heading text={'Hello'} />
			<Heading
				text={
					"I'm Tommy, a frontend engineer working with Typescript and React, team leader and content creator."
				}
			/>
		</div>
	);
};

export default Main;
