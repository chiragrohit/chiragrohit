<script lang="ts">
	import { formatDate } from '$lib/utils';
	interface Props {
		data: any;
	}

	let { data }: Props = $props();

	// Search
	let searchTerm = $state('');

	const searchPosts = $derived(
		data.posts.filter((post) => {
			return (
				post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.categories.some((category) =>
					category.toLowerCase().includes(searchTerm.toLowerCase())
				)
			);
		})
	);
</script>

<svelte:head>
	<title>Chirag Rohit - Blog</title>
</svelte:head>
<div class="max-w-screen-md mx-auto flex flex-col gap-8">
	<h1 class="text-4xl">Blogs</h1>

	<!-- Search Bar -->
	<div class="flex gap-1">
		<input
			class="w-full rounded-md p-4 border border-yellow-800 bg-yellow-100"
			type="text"
			placeholder="Search..."
			bind:value={searchTerm}
		/>
		<!-- Clear input field -->
		{#if searchTerm}
			<button
				class="btn-primary"
				onclick={() => {
					searchTerm = '';
				}}>Clear</button
			>
		{/if}
	</div>

	<!-- Posts -->
	<section>
		<ul class="flex flex-col gap-4">
			{#each searchPosts as post}
				<li class="posts">
					<a href="blog/{post.slug}" class="post-link">
						<h2 class="post-title">{post.title}</h2>
						<p class="post-date">{formatDate(post.date)}</p>
						<p class="post-description">{post.description}</p>
						<!-- for each category -->
						<div class="flex gap-2">
							{#each post.categories as category}
								<p class="post-categories">{category}</p>
							{/each}
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>
