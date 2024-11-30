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

<div class="flex flex-col gap-8 dark:text-white">
	<!-- Hero Section -->
	<div class="flex flex-col justify-center p-8 gap-4 h-[70vh]">
		<span class="text-6xl md:text-8xl">Web Dev</span>
		<span class="text-6xl md:text-8xl">Data Science</span>
		<span class="text-6xl md:text-8xl">Gen AI</span>
	</div>

	<!-- Projects Overview -->
	<section class="max-w-screen-lg mx-auto h-[70vh]">
		<h1 class="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
			Projects Overview
		</h1>

		<div class="flex flex-wrap gap-4 justify-center">
			{#each data.projects as { category, projects }}
				<div
					class={`p-6 max-w-[20rem] min-w-[20rem] ${
						category === 'Gen AI'
							? 'bg-green-500 dark:bg-green-700 text-white'
							: category === 'Data Science'
								? 'bg-blue-500 dark:bg-blue-700 text-white'
								: category === 'Web Dev'
									? 'bg-orange-500 dark:bg-orange-700 text-white'
									: 'bg-gray-300 dark:bg-gray-600 text-black'
					}`}
				>
					<div class="flex flex-col gap-4">
						<!-- Category Label -->
						<span class="text-lg font-semibold">{category}</span>

						<!-- Project Titles -->
						<ul class="list-disc pl-4">
							{#each projects as { title }}
								<li class="text-base font-medium">{title}</li>
							{/each}
						</ul>

						<!-- View Projects Button -->
						<a
							href="/projects"
							class={`py-2 px-4 rounded-md transition duration-300 text-center ${
								category === 'Gen AI'
									? 'bg-green-600 hover:bg-green-800 text-white'
									: category === 'Data Science'
										? 'bg-blue-600 hover:bg-blue-800 text-white'
										: category === 'Web Dev'
											? 'bg-orange-600 hover:bg-orange-800 text-white'
											: 'bg-gray-600 hover:bg-gray-800 text-white'
							}`}
						>
							View All Projects
						</a>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Tech Stack -->
	<section class="max-w-screen-md mx-auto h-[70vh]">
		<h1 class="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
			Tech Stack
		</h1>
		<div class="flex flex-wrap gap-4 mt-4">
			<div
				class="flex flex-col items-center text-center h-32 w-32 p-2 bg-yellow-300 dark:bg-indigo-800 hover:bg-yellow-400 dark:hover:bg-indigo-700"
			>
				<p>Sveltekit</p>
				<img
					src="https://raw.githubusercontent.com/sveltejs/branding/refs/heads/master/svelte-logo.svg"
					alt="logo"
					class="w-[75%] h-[75%]"
				/>
			</div>
		</div>
	</section>

	<!-- Posts -->
	<section class="max-w-screen-md mx-auto h-[70vh]">
		<ul class="flex flex-col gap-2">
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
