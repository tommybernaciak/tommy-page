import Content from './components/content/Content';
import Navbar from './components/navbar/Navbar';
import usePageTracking from './hooks/usePageTracking';

function App() {
	usePageTracking();
	return (
		<div className="flex relative h-full min-h-screen bg-gray-900">
			<Navbar />
			<Content />
		</div>
	);
}

export default App;
