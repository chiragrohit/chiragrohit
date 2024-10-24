<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode = true; // Default to true until browser environment is checked

	function handleSwitchDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', darkMode);
	}

	if (browser) {
		darkMode =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
	}
</script>

<div class="pr-4 md:pr-0 flex items-center">
	<input checked={darkMode} onclick={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
	<label for="theme-toggle"></label>
</div>

<style lang="postcss">
	#theme-toggle {
		@apply invisible;
	}

	#theme-toggle + label {
		@apply inline-block cursor-pointer h-8 w-8 rounded-full duration-300 content-[''];
	}

	@media (max-width: 767px) {
		#theme-toggle + label {
			@apply inline-block cursor-pointer h-6 w-6 rounded-full duration-300 content-[''];
		}
	}

	#theme-toggle:not(:checked) + label {
		@apply bg-amber-400;
	}

	#theme-toggle:checked + label {
		@apply bg-transparent;
		box-shadow: inset -8px -8px 1px 1px #ddd;
	}
</style>
