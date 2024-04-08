<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="max-w-screen-lg mx-auto">
	<!-- Article Heading -->
	<div class="bg-slate-300 dark:bg-slate-800 p-4 rounded-md">
		<h1 class="text-3xl">{data.meta.title}</h1>
		<p class="text-sm text-gray-600 dark:text-gray-400">
			Published at {formatDate(data.meta.date)}
		</p>

		<!-- Tags -->
		<div class="flex gap-2 mt-4">
			{#each data.meta.categories as category}
				<span class="btn-primary rounded-full px-3 py-1 text-sm surface-4">&num;{category}</span>
			{/each}
		</div>
	</div>

	<!-- Post -->
	<div class="prose dark:prose-invert p-4">
		<svelte:component this={data.content} />
	</div>
</article>
