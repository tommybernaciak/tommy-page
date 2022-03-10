import { FunctionComponent, ReactElement } from 'react';

interface IProps {
	text: string;
}

const SubTitle: FunctionComponent<IProps> = ({ text }): ReactElement => {
	return <p className="text-gray-300 text-2xl pb-6">{text}</p>;
};

export default SubTitle;
