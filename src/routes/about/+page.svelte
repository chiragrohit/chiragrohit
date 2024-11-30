<script>
	import { Github, Facebook, Twitter, Mail, Instagram, Linkedin } from 'lucide-svelte';
</script>

<div
	class="mx-auto flex max-w-screen-lg flex-col rounded bg-yellow-300 dark:bg-indigo-800 md:flex-row"
>
	<!-- Aside for Photo and Socials -->
	<aside class="m-4 flex flex-col items-center rounded md:w-1/4">
		<img src="profile.webp" class="mb-4 w-[30%] rounded-full md:w-[50%]" alt="Profile" />
		<h1 class="text-3xl font-semibold">Chirag Rohit</h1>
		<div class="mt-2 flex">
			<div class="flex flex-col space-y-2">
				<a
					href="https://github.com/chiragrohit"
					target="_blank"
					class="flex space-x-2 rounded p-2 hover:bg-yellow-800 hover:text-white dark:hover:bg-indigo-700"
				>
					<Github />
					<span>@chiragrohit</span>
				</a>
				<a
					href="https://twitter.com/iamchiragrohit"
					target="_blank"
					class="flex space-x-2 rounded p-2 hover:bg-yellow-800 hover:text-white dark:hover:bg-indigo-700"
				>
					<Twitter />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="https://linkedin.com/in/iamchiragrohit"
					target="_blank"
					class="flex space-x-2 rounded p-2 hover:bg-yellow-800 hover:text-white dark:hover:bg-indigo-700"
				>
					<Linkedin />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="https://instagram.com/iamchiragrohit"
					target="_blank"
					class="flex space-x-2 rounded p-2 hover:bg-yellow-800 hover:text-white dark:hover:bg-indigo-700"
				>
					<Instagram />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="https://facebook.com/iamchiragrohit"
					target="_blank"
					class="flex space-x-2 rounded p-2 hover:bg-yellow-800 hover:text-white dark:hover:bg-indigo-700"
				>
					<Facebook />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="mailto:iamchiragrohit@gmail.com"
					class="flex space-x-2 rounded p-2 hover:bg-yellow-800 hover:text-white dark:hover:bg-indigo-700"
				>
					<Mail />
					<span>iamchiragrohit@gmail.com</span>
				</a>
			</div>
		</div>
	</aside>

	<div
		class="m-4 flex flex-col items-center rounded bg-yellow-200 p-4 dark:bg-indigo-900 md:w-3/4 md:items-start"
	>
		<h1 class="text-3xl md:pl-2">Hello<span>👋</span></h1>
		<p class="rounded p-2 hover:bg-yellow-300 dark:hover:bg-indigo-800">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea impedit magni beatae! Eos
			adipisci in quam ratione, maxime esse, aut, vero doloremque voluptates modi quae?
			Reprehenderit necessitatibus unde dolores?
		</p>
		<p class="rounded p-2 hover:bg-yellow-300 dark:hover:bg-indigo-800">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea impedit magni beatae! Eos
			adipisci in quam ratione, maxime esse, aut, vero doloremque voluptates modi quae?
			Reprehenderit necessitatibus unde dolores?
		</p>
	</div>
</div>
