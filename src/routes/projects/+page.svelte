<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Chirag Rohit - Projects</title>
</svelte:head>

<div class="max-w-screen-md mx-auto flex flex-col gap-8">
	<div>
		<h1 class="text-3xl">Projects</h1>
	</div>

	<div class="flex flex-wrap gap-4 justify-center">
		{#each data.projects as { category, projects }}
			{#each projects as { title, description, link, status }}
				<div class="card">
					<!-- Dynamically set the class based on category -->
					<div
						class={`card-body ${
							category === 'Gen AI'
								? 'gen-ai-card'
								: category === 'Data Science'
									? 'data-science-card'
									: category === 'Web Dev'
										? 'web-dev-card'
										: 'default-card'
						}`}
					>
						<!-- Category label -->
						<span>{category}</span>

						<!-- Title -->
						<h1>{title}</h1>

						<!-- Description -->
						<p>{description}</p>

						<!-- View Project Button -->
						<a
							href={link}
							class={`btn ${
								category === 'Gen AI'
									? 'gen-ai-btn'
									: category === 'Data Science'
										? 'data-science-btn'
										: category === 'Web Dev'
											? 'web-dev-btn'
											: 'default-btn'
							}`}
						>
							View Project
						</a>
					</div>
				</div>
			{/each}
		{/each}
	</div>
</div>
