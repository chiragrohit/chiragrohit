<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { fade } from 'svelte/transition';

	export let data;
</script>

<Navbar navbarItems={data.navbarItems} />
{#key data.url}
	<div class="overflow-auto p-4" transition:fade={{ delay: 100, duration: 300 }}>
		<slot />
	</div>
{/key}
