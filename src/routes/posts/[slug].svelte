<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	// primarilty used to load data before render
	export const load: Load<{ slug: string }> = async ({ params }) => {
		try {
			const Hello = (await import(`../../posts/${params.slug}.md`)).default;

			const post = {
				title: params.slug,
				date: new Date(),
				body: 'This is my first post!'
			};

			return {
				// data passed into svelte component
				props: {
					post,
					Hello
				}
			};
		} catch (error) {
			console.log('e', error);
			return {
				status: 404,
				error: new Error(`Post not found: ${params.slug}`)
			};
		}
	};
</script>

<script>
	// post is available because defined in loading function
	// export let post;
	export let Hello;
</script>

<Hello />
