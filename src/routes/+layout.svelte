<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<Navbar />
{#key data.url}
	<div
		class="overflow-auto max-w-screen-xl mx-auto"
		in:fly={{ y: 200, duration: 300, delay: 300 }}
		out:fly={{ y: -200, duration: 300 }}
	>
		<slot />
	</div>
{/key}
