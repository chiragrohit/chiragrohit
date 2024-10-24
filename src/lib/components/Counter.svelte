<script lang="ts">
	let count = $state(0);

	const increment = () => (count += 1);
</script>

<button onclick={increment} class="btn-primary px-12">
	{count}
</button>
