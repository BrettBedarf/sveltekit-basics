<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const posts = import.meta.globEager('../../posts/*.md');
		const postList = Object.values(posts);
		// iterate over posts and return post item
		const postListComponents = postList.map((post) => {
			return post.default;
		});

		return {
			props: { postListComponents: postListComponents }
		};
	};
</script>

<script>
	export let postListComponents;

	console.log(postListComponents);
</script>

<div>
	<slot />
	<aside>
		<h5>Archive</h5>
		<ul><a href="/posts">Home</a></ul>
		<ul><a href="/posts/about">About</a></ul>
		<ul>
			{#each postListComponents as Post}
				<!-- content here -->
				<li>
					<Post />
				</li>
			{/each}
		</ul>
	</aside>
</div>

<style>
	div {
		margin: 2rem 0;
	}
	div aside {
		margin: 1rem 0;
	}
	h5 {
		font-weight: bold;
	}
	aside ul a {
		background-color: orange;
	}
</style>
