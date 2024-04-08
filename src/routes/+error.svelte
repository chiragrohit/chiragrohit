<script>
	import { page } from '$app/stores';
</script>

<div class="grid place-items-center h-[70vh] text-4xl">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>
