<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	// /** @type {import('@sveltejs/kit').Load} */
	export const load: ErrorLoad<{ error: Error; status: number }> = ({ error, status }) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script lang="ts">
	export let error: Error;
	export let status: number;
</script>

<h1>{status}</h1>
<h3>{error?.message}</h3>
