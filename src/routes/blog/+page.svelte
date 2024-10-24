<script lang="ts">
	import { formatDate } from '$lib/utils';
	interface Props {
		data: any;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Chirag Rohit - Blog</title>
</svelte:head>
<div class="max-w-screen-md mx-auto flex flex-col gap-8">
	<h1 class="text-4xl">Blog</h1>
	<!-- Posts -->
	<section>
		<ul class="flex flex-col gap-4">
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
