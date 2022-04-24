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
		<ul><a href="/posts">Home</a></ul>
		<ul><a href="/posts/about">About</a></ul>
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
