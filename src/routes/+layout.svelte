<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { fade } from 'svelte/transition';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>
<!-- Work in progress -->
<p
	class="fixed bottom-0 left-0 p-2 bg-red-500 bg-opacity-50 text-black rounded-tr-lg shadow-lg z-50"
>
	Portfolio under construction!
</p>

<Navbar navbarItems={data.navbarItems} />
{#key data.url}
	<div class="overflow-auto p-4" in:fade>
		<slot />
	</div>
{/key}
