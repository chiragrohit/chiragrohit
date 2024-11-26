<script context="module" lang="ts">
	const data = {
		projects: [
			{
				category: 'Data Science',
				projects: [
					{
						title: 'ECI Result',
						description: 'Election Commision of India results',
						link: '/projects/ecidashboard',
						status: 'View'
					},
					{
						title: 'Data Dashboard',
						description: 'Interactive visualizations of global socio-economic indicators.',
						link: '/projects/datadashboard',
						status: 'View'
					}
				]
			},
			{
				category: 'Web Dev',
				projects: [
					{
						title: 'Editor',
						description: 'A markdown-based editor using codemirror',
						link: '/editor',
						status: 'View'
					},
					{
						title: 'Svelte in Markdown',
						description: 'Write Svelte components in Markdown',
						link: '/blog/svelte-markdown',
						status: 'View'
					},
					{
						title: 'Current Website',
						description: 'Tech stack for this portfolio website.',
						link: '#',
						status: 'Coming Soon'
					}
				]
			},

			{
				category: 'Gen AI',
				projects: [
					{
						title: 'Llama 3.2 3B',
						description: 'Llama 3.2 3B and Ollama through Modal.com',
						link: '/projects/llama3.2',
						status: 'View'
					}
				]
			}
		]
	};
</script>

<svelte:head>
	<title>Chirag Rohit - Projects</title>
</svelte:head>

<div class="max-w-screen-md mx-auto flex flex-col gap-8">
	<div>
		<h1 class="text-3xl">Projects</h1>
	</div>
	{#each data.projects as { category, projects }}
		<div
			class="border-2 border-yellow-200 bg-yellow-200 dark:bg-slate-800 dark:border-slate-800 p-4 rounded"
		>
			<h1 class="text-2xl text-center">{category}</h1>
			<div class="flex flex-wrap gap-4 justify-center">
				{#each projects as { title, description, link, status }}
					<div class="card">
						<div class="card-body">
							<h1>{title}</h1>
							<p>{description}</p>
							<a href={link}>{status}</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
