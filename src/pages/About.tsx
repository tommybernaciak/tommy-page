import Heading from '../components/typography/Heading';
import P from '../components/typography/P';
import { about } from '../utils/about';

function About() {
	return (
		<div className="px-6 md:px-20 lg:px-48 py-20 w-full lg:w-[580px] mx-auto prose dark:prose-invert h-fit prose-img:mx-auto">
			<Heading text={'Hello'} />
			<P text={about.p1} />
			<P text={about.p2} />
		</div>
	);
}

export default About;
