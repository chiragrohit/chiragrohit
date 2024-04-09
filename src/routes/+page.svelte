<script lang="ts">
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<svelte:head>
	<title>Chirag Rohit - Home</title>
</svelte:head>

<div
	class="h-[70vh] bg-gradient-to-b from-yellow-600 via-yellow-300 to-yellow-100 dark:bg-gradient-to-b dark:from-slate-600 dark:via-sky-950 dark:to-slate-950 flex flex-col justify-center p-8"
>
	<h1 class="text-6xl md:text-8xl">Web Dev</h1>
	<h1 class="text-6xl md:text-8xl">Data Science</h1>
	<h1 class="text-6xl md:text-8xl">Gen AI</h1>
</div>
<div class="h-[70vh]">
	<h1>Tech Stack</h1>
</div>

<div class="">
	<!-- Posts -->
	<section class="pt-8">
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
