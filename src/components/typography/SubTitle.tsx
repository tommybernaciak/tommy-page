import { FunctionComponent, ReactElement } from 'react';

interface IProps {
	text: string;
}

const SubTitle: FunctionComponent<IProps> = ({ text }): ReactElement => {
	return <h2 className="text-gray-300 text-xl md:text-2xl pb-6">{text}</h2>;
};

export default SubTitle;
