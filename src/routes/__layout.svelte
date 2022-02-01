<script>
	import Header from '$lib/header.svelte';
	import '../tailwind.css';

	const twHex = '100';
</script>

<Header />
<main class="bg-blue-{twHex}">
	<slot />
</main>

<div>
	<footer>&copy 2022</footer>
</div>

<style lang="scss">
	div {
		footer {
			background: #333;
			color: #fff;
			/* padding: 1em; */
			text-align: center;
		}
	}
</style>
