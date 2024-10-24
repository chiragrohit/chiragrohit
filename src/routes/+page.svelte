<script lang="ts">
	import { formatDate } from '$lib/utils';
	interface Props {
		data: any;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Chirag Rohit - Home</title>
</svelte:head>

<div class="flex flex-col gap-8">
	<div
		class="flex flex-col justify-center p-8 gap-4 h-[70vh] bg-gradient-to-b from-yellow-600 via-yellow-300 to-yellow-100 dark:bg-gradient-to-b dark:from-slate-600 dark:via-sky-950 dark:to-slate-950"
	>
		<span class="text-6xl md:text-8xl">Web Dev</span>
		<span class="text-6xl md:text-8xl">Data Science</span>
		<span class="text-6xl md:text-8xl">Gen AI</span>
	</div>
	<div class="h-[70vh] max-w-screen-md mx-auto">
		<h1 class="text-3xl">Tech Stack</h1>
		<div class="flex flex-wrap gap-4 mt-4">
			<div
				class="flex flex-col items-center text-center h-32 w-32 p-2 bg-yellow-300 dark:bg-slate-800 hover:bg-yellow-400 dark:hover:bg-slate-700"
			>
				<p>Sveltekit</p>
				<img src="https://raw.githubusercontent.com/sveltejs/branding/refs/heads/master/svelte-logo.svg" alt="logo" class="w-[75%] h-[75%]" />
			</div>
		</div>
	</div>

	<!-- Posts -->
	<section class="">
		<ul class="flex flex-col gap-2 max-w-screen-md mx-auto">
			<h1 class="text-3xl">Recent Blogs</h1>
			{#each data.posts as post}
				<li class="posts">
					<a href="blog/{post.slug}" class="post-link">
						<h2 class="post-title">{post.title}</h2>
						<p class="post-date">{formatDate(post.date)}</p>
						<p class="post-description">{post.description}</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>
