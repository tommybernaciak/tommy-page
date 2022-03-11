import { FunctionComponent, ReactElement } from 'react';

interface IProps {
	text: string;
}

const Heading: FunctionComponent<IProps> = ({ text }): ReactElement => {
	return <h1 className="text-gray-200 text-2xl md:text-3xl pb-6">{text}</h1>;
};

export default Heading;
