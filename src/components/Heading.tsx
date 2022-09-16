import { FunctionComponent, ReactElement } from 'react';

interface IProps {
	text: string;
}

const Heading: FunctionComponent<IProps> = ({ text }): ReactElement => {
	return <h1 className="text-white text-2xl md:text-3xl pb-2 pt-2">{text}</h1>;
};

export default Heading;
