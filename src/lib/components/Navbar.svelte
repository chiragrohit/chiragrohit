<script>
	let isOpen = false;
	import { page } from '$app/stores';
	import { theme } from '$lib/stores';

	const navbarItems = {
		Home: '/',
		Projects: '/projects',
		Components: '/components',
		'Tech Stack': '/techstack',
		About: '/about',
		Contact: '/contact',
		Test: '/test'
	};

	function changeTheme() {
		$theme = !$theme;
	}
</script>

<!-- {JSON.stringify($page)} -->
Theme: {$theme}
<nav
	class="text-white shadow-lg sticky top-0 z-50 bg-gradient-to-r from-emerald-900 to-emerald-500"
>
	<div class="mx-auto max-w-screen-xl">
		<div class="flex justify-between">
			<div class="flex justify-between items-center w-full">
				<!-- logo -->
				<div class="hover:text-emerald-300">
					<a href="/" class="flex items-center py-5 px-3">
						<span class="text-xl font-bold">Chirag Rohit</span>
					</a>
				</div>
				<div class="flex space-x-4">
					<!-- primary nav -->
					<div class="hidden md:flex items-center space-x-1">
						{#each Object.entries(navbarItems) as [label, route]}
							<a href={route} class="py-2 px-3 hover:bg-emerald-800 hover:text-white">{label}</a>
						{/each}
						<button on:click={changeTheme} class="btn-primary">Theme</button>
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
	<div class={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
		{#each Object.entries(navbarItems) as [label, route]}
			<a href={route} class="block py-2 px-4 text-sm hover:bg-emerald-800 hover:text-white"
				>{label}</a
			>
		{/each}
	</div>
</nav>
