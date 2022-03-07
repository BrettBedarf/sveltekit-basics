/* js/ts file in route like this means /post is an api route that returns JSON  
        http://localhost:3000/post.json
*/

import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async function ({ params }) {
	return {
		status: 200,
		body: {
			data: 'test'
		}
	};
};
