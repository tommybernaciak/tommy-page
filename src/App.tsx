import BlogCard from './components/BlogCard';
import Container from './components/Container';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import usePageTracking from './hooks/usePageTracking';
import { blog, IBlogPost } from './utils/blog';

function App() {
	usePageTracking();
	return (
		<div className="flex relative h-full min-h-screen bg-gray-900">
			<main className="h-screen overflow-y-auto py-4 md:py-20">
				<Container>
					<Navbar />
				</Container>
				<Container>
					<Heading text={'Blog Posts'} />
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{blog.map((post: IBlogPost, i: number) => (
							<BlogCard
								key={i}
								title={post.title}
								date={post.date}
								href={post.href}
							></BlogCard>
						))}
					</div>
				</Container>
			</main>
		</div>
	);
}

export default App;
