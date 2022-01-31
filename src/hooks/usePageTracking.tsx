import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
	const location = useLocation();
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			fetch(`/.netlify/functions/get-ga`)
				.then(resp => resp.json())
				.then((data: { code: string }) => {
					ReactGA.initialize(data.code);
					setInitialized(true);
				})
				.catch(e => console.log(e));
		}
	}, []);

	useEffect(() => {
		if (initialized) {
			ReactGA.pageview(location.pathname + location.search);
		}
	}, [initialized, location]);
};

export default usePageTracking;
