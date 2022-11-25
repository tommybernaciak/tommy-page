import { FunctionComponent, ReactElement } from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';
import P from '../components/P';
import { about } from '../utils/about';

const About: FunctionComponent = (): ReactElement => {
	return (
		<>
			<p className="text-gray-300 text-md md:text-l pb-2">
				Front-end Developer / Team Leader
			</p>
			<Container>
				<Heading text={'About Me'} />
				<P text={about.p1} />
				<P text={about.p2} />
			</Container>
		</>
	);
};

export default About;
