import { FunctionComponent, PropsWithChildren, ReactElement } from 'react';

const Container: FunctionComponent<PropsWithChildren<{}>> = ({ children }): ReactElement => {
	return (
		<div className="px-6 md:px-20 lg:px-48 w-full lg:w-[580px] mx-auto prose dark:prose-invert h-fit prose-img:mx-auto pt-6">
			{children}
		</div>
	);
};

export default Container;
