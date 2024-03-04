<script>
	let isOpen = false;
</script>

<nav class="bg-black text-white">
	<div class="mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex justify-between items-center w-full">
				<!-- Left side: logo and primary nav -->
				<div class="flex space-x-4">
					<!-- logo -->
					<div>
						<a href="/" class="flex items-center py-5 px-3">
							<span class="text-xl font-bold">Chirag Rohit</span>
						</a>
					</div>

					<!-- primary nav -->
					<div class="hidden md:flex items-center space-x-1">
						<a href="/" class="py-2 px-3 hover:bg-white hover:text-black">Home</a>
						<a href="/projects" class="py-2 px-3 hover:bg-white hover:text-black">Projects</a>
						<a href="/components" class="py-2 px-3 hover:bg-white hover:text-black">Components</a>
						<a href="/about" class="py-2 px-3 hover:bg-white hover:text-black">About</a>
						<a href="/contact" class="py-2 px-3 hover:bg-white hover:text-black">Contact</a>
					</div>
				</div>
			</div>

			<!-- mobile button goes here -->
			<div class="md:hidden flex items-center">
				<button class="mobile-menu-button" on:click={() => (isOpen = !isOpen)}>
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
		<a href="/" class="block py-2 px-4 text-sm hover:bg-white hover:text-black">Home</a>
		<a href="/projects" class="block py-2 px-4 text-sm hover:bg-white hover:text-black">Projects</a>
		<a href="/components" class="block py-2 px-4 text-sm hover:bg-white hover:text-black"
			>Components</a
		>
		<a href="/about" class="block py-2 px-4 text-sm hover:bg-white hover:text-black">About</a>
		<a href="/contact" class="block py-2 px-4 text-sm hover:bg-white hover:text-black">Contact</a>
	</div>
</nav>
