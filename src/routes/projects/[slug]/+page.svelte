<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="max-w-screen-lg mx-auto">
	<div class="flex flex-wrap justify-stretch">
		<aside class="bg-slate-900 w-full md:w-1/5 p-4">
			<h1 class="text-xl">Other Projects</h1>
		</aside>
		<div class="flex flex-col gap-4 bg-slate-800 w-full md:w-4/5 p-4">
			<h1 class="text-3xl">{data.title}</h1>
			<div class="">{@html data.content}</div>
		</div>
	</div>
</div>
