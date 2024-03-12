<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1 class="text-3xl">{data.title}</h1>
<div>{@html data.content}</div>
