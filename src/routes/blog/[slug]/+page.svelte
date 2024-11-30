<script lang="ts">
	import { formatDate } from '$lib/utils';

	interface Props {
		data: any;
	}

	let { data }: Props = $props();
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.5.0/prism-atom-dark.min.css"
		integrity="sha512-GZPS1oCebjx8g/ZkrTTvWirW+4wDkzIsilUQPXcZzuDpDzoH5brM2AojiFjo6ObIWeM68ZDostvdjaS9MNYCTg=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

<article class="max-w-screen-md mx-auto">
	<a class="btn-primary" href="/blog">&larr; Blogs</a>
	<!-- Article Heading -->
	<div class="bg-yellow-300 dark:bg-indigo-800 p-4 rounded-md mt-8">
		<h1 class="text-3xl">{data.meta.title}</h1>
		<p class="text-sm text-gray-600 dark:text-gray-400">
			Published on {formatDate(data.meta.date)}
		</p>

		<!-- Tags -->
		<div class="flex gap-2 mt-4">
			{#each data.meta.categories as category}
				<span class="btn-primary rounded-full px-3 py-1 text-sm surface-4">&num;{category}</span>
			{/each}
		</div>
	</div>

	<!-- Post -->

	<div
		class="prose prose-pre:bg-indigo-800 prose-blockquote:bg-yellow-300 prose-blockquote:dark:bg-indigo-800 dark:prose-invert p-4"
	>
		<data.content />
	</div>
</article>
