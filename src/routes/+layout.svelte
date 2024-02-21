<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
</script>

<Navbar></Navbar>

<main class="p-5">
	<slot />
</main>
