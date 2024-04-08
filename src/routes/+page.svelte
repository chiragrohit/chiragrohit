<script lang="ts">
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="text-xl">Home</h1>
</div>
<div class="h-[70vh] bg-slate-200 dark:bg-slate-800 text-center">Hero Section</div>
<div class="">
	<!-- Posts -->
	<section class="pt-8">
		<ul class="flex flex-col gap-2 max-w-screen-lg mx-auto">
			<h1 class="text-3xl">Recent Blogs</h1>
			{#each data.posts as post}
				<li
					class="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 p-4 rounded-lg shadow-md"
				>
					<a href="blog/{post.slug}" class="post-link">
						<h2 class="text-2xl capitalize font-bold">{post.title}</h2>
						<p class="text-sm text-gray-600 dark:text-gray-400">{formatDate(post.date)}</p>
						<p class="text-lg mt-2 text-gray-600 dark:text-gray-400">{post.description}</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>
