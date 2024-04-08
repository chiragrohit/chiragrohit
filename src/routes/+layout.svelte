<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<Navbar navbarItems={data.navbarItems} />
<ThemeSwitch />
{#key data.url}
	<div
		class="overflow-auto p-4"
		in:fly={{ y: 200, duration: 300, delay: 300 }}
		out:fly={{ y: -200, duration: 300 }}
	>
		<slot />
	</div>
{/key}
