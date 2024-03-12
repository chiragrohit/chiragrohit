<script>
	import { Github, Facebook, Twitter, Mail, Instagram } from 'lucide-svelte';
</script>

<div class="flex flex-col md:flex-row">
	<!-- Aside for Photo and Socials -->
	<aside class="flex flex-col items-center p-4 md:w-1/4 bg-sky-200">
		<img src="profile.png" class="w-[30%] md:w-[50%] rounded-full mb-4" alt="Profile" />
		<h1 class="text-3xl font-semibold">Chirag Rohit</h1>
		<div class="flex mt-2">
			<div class="flex flex-col space-y-2">
				<a
					href="https://github.com/chiragrohit"
					class="flex space-x-2 p-2 hover:bg-sky-500 hover:text-white"
				>
					<Github />
					<span>@chiragrohit</span>
				</a>
				<a
					href="https://twitter.com/iamchiragrohit"
					class="flex space-x-2 p-2 hover:bg-sky-500 hover:text-white"
				>
					<Twitter />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="https://facebook.com/iamchiragrohit"
					class="flex space-x-2 p-2 hover:bg-sky-500 hover:text-white"
				>
					<Facebook />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="https://instagram.com/iamchiragrohit"
					class="flex space-x-2 p-2 hover:bg-sky-500 hover:text-white"
				>
					<Instagram />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="mailto:iamchiragrohit@gmail.com"
					class="flex space-x-2 p-2 hover:bg-sky-500 hover:text-white"
				>
					<Mail />
					<span>iamchiragrohit@gmail.com</span>
				</a>
			</div>
		</div>
	</aside>

	<div class="flex flex-col p-8 md:w-3/4 bg-sky-300">
		<h1 class="text-3xl">Hello<span>👋</span></h1>
	</div>
</div>
