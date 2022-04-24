<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	// primarilty used to load data before render
	export const load: Load<{ slug: string }> = async ({ params }) => {
		const post = {
			title: params.slug,
			date: new Date(),
			body: 'This is my first post!'
		};

		return {
			props: {
				post
			}
		};
	};
</script>

<script>
	// post is available because defined in loading function
	export let post;
</script>

<h3>{post.title}</h3>
