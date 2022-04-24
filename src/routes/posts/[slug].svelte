<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	// primarilty used to load data before render
	export const load: Load<{ slug: string }> = async ({ params }) => {
		const Hello = (await import(`../../posts/${params.slug}.md`)).default;

		const post = {
			title: params.slug,
			date: new Date(),
			body: 'This is my first post!'
		};

		return {
			props: {
				post,
				Hello
			}
		};
	};
</script>

<script>
	// post is available because defined in loading function
	// export let post;
	export let Hello;
</script>

<Hello />
