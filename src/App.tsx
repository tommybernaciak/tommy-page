import Container from './components/Container';
import Heading from './components/Heading';
import P from './components/P';
import usePageTracking from './hooks/usePageTracking';
import { about } from './utils/about';

function App() {
	usePageTracking();
	return (
		<div className="flex relative h-full min-h-screen bg-gray-900">
			<main className="h-screen overflow-y-auto py-20">
				<Container>
					<Heading text={'Tommy Bernaciak'} />
					<P text={'Front-end Developer / Team Leader'} />
				</Container>
				<Container>
					<Heading text={'About Me'} />
					<P text={about.p1} />
					<P text={about.p2} />
				</Container>
				{/* <Container>
					<Heading text={'Blog Posts'} />
				</Container> */}
			</main>
		</div>
	);
}

export default App;
