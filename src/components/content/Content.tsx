import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About';

function Content() {
	return (
		<div className="flex-1 bg-gray-900">
			<main className="h-screen overflow-y-auto">
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="about" element={<About />} />
				</Routes>
			</main>
		</div>
	);
}

export default Content;
