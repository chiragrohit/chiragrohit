<script>
	import { Github, Facebook, Twitter, Mail, Instagram, Linkedin } from 'lucide-svelte';
</script>

<div class="flex flex-col md:flex-row bg-slate-300 dark:bg-slate-800 p-4 max-w-screen-lg mx-auto">
	<!-- Aside for Photo and Socials -->
	<aside class="flex flex-col items-center md:w-1/4">
		<img src="profile.png" class="w-[30%] md:w-[50%] rounded-full mb-4" alt="Profile" />
		<h1 class="text-3xl font-semibold">Chirag Rohit</h1>
		<div class="flex mt-2">
			<div class="flex flex-col space-y-2">
				<a
					href="https://github.com/chiragrohit"
					target="_blank"
					class="flex space-x-2 p-2 hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white"
				>
					<Github />
					<span>@chiragrohit</span>
				</a>
				<a
					href="https://twitter.com/iamchiragrohit"
					target="_blank"
					class="flex space-x-2 p-2 hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white"
				>
					<Twitter />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="https://linkedin.com/in/iamchiragrohit"
					target="_blank"
					class="flex space-x-2 p-2 hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white"
				>
					<Linkedin />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="https://instagram.com/iamchiragrohit"
					target="_blank"
					class="flex space-x-2 p-2 hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white"
				>
					<Instagram />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="https://facebook.com/iamchiragrohit"
					target="_blank"
					class="flex space-x-2 p-2 hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white"
				>
					<Facebook />
					<span>@iamchiragrohit</span>
				</a>
				<a
					href="mailto:iamchiragrohit@gmail.com"
					class="flex space-x-2 p-2 hover:bg-slate-800 dark:hover:bg-slate-700 hover:text-white"
				>
					<Mail />
					<span>iamchiragrohit@gmail.com</span>
				</a>
			</div>
		</div>
	</aside>

	<div class="flex flex-col pl-4 md:w-3/4">
		<h1 class="text-3xl">Hello<span>👋</span></h1>
	</div>
</div>
