<script lang="ts">
	import { formatDate } from '$lib/utils';

	interface Props {
		data: {
			projects: Array<{
				category: string;
				projects: Array<{ title: string }>;
			}>;
			posts: Array<{
				slug: string;
				title: string;
				date: string;
				description: string;
			}>;
		};
	}

	let { data }: Props = $props();

	// Color mapping for categories
	const categoryColors = {
		'Gen AI': {
			bg: 'bg-green-500 dark:bg-green-700',
			buttonBg: 'bg-green-600 hover:bg-green-800'
		},
		'Data Science': {
			bg: 'bg-blue-500 dark:bg-blue-700',
			buttonBg: 'bg-blue-600 hover:bg-blue-800'
		},
		'Web Dev': {
			bg: 'bg-orange-500 dark:bg-orange-700',
			buttonBg: 'bg-orange-600 hover:bg-orange-800'
		},
		default: {
			bg: 'bg-gray-300 dark:bg-gray-600',
			buttonBg: 'bg-gray-600 hover:bg-gray-800'
		}
	};

	const techStack = [
		{
			name: 'Sveltekit',
			logo: 'https://raw.githubusercontent.com/sveltejs/branding/refs/heads/master/svelte-logo.svg',
			bgClass: 'bg-yellow-300 dark:bg-indigo-800 hover:bg-yellow-400 dark:hover:bg-indigo-700'
		},
		{
			name: 'Tailwind CSS',
			logo: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
			bgClass: 'bg-yellow-300 dark:bg-indigo-800 hover:bg-yellow-400 dark:hover:bg-indigo-700'
		}
	];
</script>

<svelte:head>
	<title>Chirag Rohit - Home</title>
</svelte:head>

<div class="container mx-auto px-4 py-8 dark:text-white">
	<!-- Hero Section -->
	<section class="min-h-[70vh] flex flex-col justify-center text-center mb-16">
		<h1 class="text-6xl md:text-8xl font-bold mb-9 text-black dark:text-white">Chirag Rohit</h1>

		<div class="space-y-2">
			<p class="text-4xl md:text-6xl font-semibold">Web Dev</p>
			<p class="text-4xl md:text-6xl font-semibold">Data Science</p>
			<p class="text-4xl md:text-6xl font-semibold">Gen AI</p>
		</div>
	</section>

	<!-- Projects Overview -->
	<section class="mb-16">
		<h2 class="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
			Projects Overview
		</h2>
		<div class="grid md:grid-cols-3 gap-6 justify-center">
			{#each data.projects as { category, projects }}
				<div
					class={`p-6 rounded-lg shadow-lg ${categoryColors[category]?.bg || categoryColors.default.bg} text-white`}
				>
					<div class="flex flex-col gap-4">
						<h3 class="text-xl font-semibold">{category}</h3>

						<ul class="list-disc pl-4 min-h-[100px]">
							{#each projects.slice(0, 3) as { title }}
								<li class="text-base font-medium truncate">{title}</li>
							{/each}
							{#if projects.length > 3}
								<li class="text-sm opacity-75">+ {projects.length - 3} more</li>
							{/if}
						</ul>

						<a
							href="/projects"
							class={`py-2 px-4 rounded-md transition duration-300 text-center ${categoryColors[category]?.buttonBg || categoryColors.default.buttonBg}`}
						>
							View All Projects
						</a>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Recent Blogs -->
	<section class="mb-16">
		<h2 class="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
			Recent Blogs
		</h2>
		<div class="max-w-2xl mx-auto space-y-4">
			{#each data.posts as post}
				<ul>
					<li class="posts">
						<a href="blog/{post.slug}">
							<h1 class="post-title">{post.title}</h1>
							<p class="post-date">{formatDate(post.date)}</p>
							<p class="post-description">{post.description}</p>
						</a>
					</li>
				</ul>
			{/each}
		</div>
	</section>

	<!-- Tech Stack -->
	<section class="mb-16">
		<h2 class="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
			Tech Stack
		</h2>
		<div class="flex flex-wrap justify-center gap-6">
			{#each techStack as { name, logo, bgClass }}
				<div
					class={`flex flex-col items-center text-center h-40 w-40 p-4 rounded-lg shadow-md ${bgClass} transform transition hover:scale-105`}
				>
					<p class="mb-2 font-semibold">{name}</p>
					<img src={logo} alt={`${name} logo`} class="w-[70%] h-[70%] object-contain" />
				</div>
			{/each}
		</div>
	</section>
</div>
