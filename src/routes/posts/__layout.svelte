<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	// export const load: Load = async () => {};
</script>

<script>
</script>

<div>
	<slot />
	<aside>
		<h5>Archive</h5>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a sveltekit:prefetch href="/posts">Posts</a></li>
			<li>
				<a rel="external" href="https://kit.svelte.dev/docs/modules#$app-navigation-prefetch"
					>SvelteKit Prefetch</a
				>
			</li>
		</ul>
		<ul />
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
