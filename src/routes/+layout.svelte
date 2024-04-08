<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data;
</script>

<Navbar navbarItems={data.navbarItems} />
{#key data.url}
	<div class="overflow-auto p-4">
		<slot />
	</div>
{/key}
