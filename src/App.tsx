import { Routes, Route } from 'react-router-dom';
import { blogposts } from './blog/blogposts';
import { BlogPostListElement } from './blog/types';
import BlogPost from './components/blog/BlogPost';
import Navbar from './components/navbar/Navbar';
import usePageTracking from './hooks/usePageTracking';
import About from './pages/About';
import Blog from './pages/Blog';
import Main from './pages/Main';

function App() {
	usePageTracking();
	return (
		<div className="flex relative h-full min-h-screen bg-gray-900">
			<Navbar />
			<div className="flex-1 bg-gray-900">
				<main className="h-screen overflow-y-auto">
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="about" element={<About />} />
						<Route path="blog" element={<Blog />} />
						{blogposts.map((post: BlogPostListElement) => (
							<Route
								key={post.url}
								path={post.url}
								element={<BlogPost blogpost={post.content} />}
							/>
						))}
					</Routes>
				</main>
			</div>
		</div>
	);
}

export default App;
