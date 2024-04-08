<script>
	let isOpen = false;

	export let navbarItems;
</script>

<nav class="p-8 text-[18px] font-semibold">
	<div class="mx-auto max-w-screen-xl">
		<div class="flex justify-between">
			<div class="flex justify-between items-center w-full">
				<!-- logo -->
				<div class="pl-4 md:pl-0">
					<a href="/" class="flex items-center">
						<span class="text-xl font-bold">Chirag Rohit</span>
					</a>
				</div>
				<div class="flex space-x-4">
					<!-- primary nav -->
					<div class="hidden md:flex items-center">
						{#each Object.entries(navbarItems) as [label, route]}
							<a href={route} class="py-2 px-3 hover:bg-gray-200 hover:text-black rounded"
								>{label}</a
							>
						{/each}
					</div>
				</div>
			</div>

			<!-- mobile button goes here -->
			<div class="md:hidden flex items-center">
				<button class="pr-4" on:click={() => (isOpen = !isOpen)}>
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"
						></path></svg
					>
				</button>
			</div>
		</div>
	</div>

	<!-- mobile menu -->
	<div class={`md:hidden bg-gray-100 dark:bg-gray-800 pt-4 ${isOpen ? 'block' : 'hidden'}`}>
		{#each Object.entries(navbarItems) as [label, route]}
			<a href={route} class="block py-1 px-4 hover:bg-gray-300 hover:text-black rounded-sm"
				>{label}</a
			>
		{/each}
	</div>
</nav>
