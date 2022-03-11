import { FunctionComponent, ReactElement } from 'react';

interface IProps {
	text: string;
}

const Date: FunctionComponent<IProps> = ({ text }): ReactElement => {
	return <p className="text-gray-500 text-xs md:text-sm italic pb-1">{text}</p>;
};

export default Date;
