<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
</script>

<Navbar />
<div class="bg-white overflow-auto max-w-screen-xl mx-auto">
	<slot />
</div>
