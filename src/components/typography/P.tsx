import { FunctionComponent, ReactElement } from 'react';

interface IProps {
	text: string;
}

const P: FunctionComponent<IProps> = ({ text }): ReactElement => {
	return <p className="text-gray-300 text-xl pb-6">{text}</p>;
};

export default P;
