import { FunctionComponent, ReactElement } from 'react';

interface IProps {
	text: string;
}

const P: FunctionComponent<IProps> = ({ text }): ReactElement => {
	return <p className="text-gray-300 text-l md:text-xl pb-2">{text}</p>;
};

export default P;
