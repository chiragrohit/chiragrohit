<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<Navbar navbarItems={data.navbarItems} />
{#key data.url}
	<div
		class="overflow-auto p-4 md:p-0"
		in:fly={{ y: 200, duration: 300, delay: 300 }}
		out:fly={{ y: -200, duration: 300 }}
	>
		<slot />
	</div>
{/key}
