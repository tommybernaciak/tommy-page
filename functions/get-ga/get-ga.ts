import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
	const GA = process.env.GA;

	return {
		statusCode: 200,
		body: JSON.stringify({
			code: GA
		})
	};
};
