<script>
	import LeftSidebar from './LeftSidebar.svelte';
	import MainContent from './MainContent.svelte';
	import RightSidebar from './RightSidebar.svelte';
	import { slide } from 'svelte/transition';
	import { sidebar } from '$lib/stores';
</script>

<div class="flex justify-between text-white pl-2 pr-2 pb-2">
	<button on:click={sidebar.toggleLeft} class="btn-primary py-1">Left</button>
	<button on:click={sidebar.toggleRight} class="btn-primary py-1">Right</button>
</div>

<div class="flex h-screen overflow-hidden">
	<div
		in:slide={{ from: -300 }}
		class="w-full sm:flex-none sm:w-64 bg-slate-300 dark:bg-slate-800 dark:text-slate-200 rounded-md"
		style:width={$sidebar.leftOpen ? '300px' : '0px'}
	>
		<!-- Left sidebar content -->
		<LeftSidebar></LeftSidebar>
	</div>

	<div class="flex-1 overflow-y-auto p-4 ml-4 mr-4 rounded-md">
		<!-- Main content -->
		<MainContent />
	</div>

	<div
		in:slide={{ from: 300 }}
		class="w-full sm:flex-none sm:w-64 bg-slate-300 dark:bg-slate-800 dark:text-slate-200 rounded-md"
		style:width={$sidebar.rightOpen ? '300px' : '0px'}
	>
		<!-- Right sidebar content -->
		<RightSidebar></RightSidebar>
	</div>
</div>

<style>
	/* To make sure transitions apply to width changes */
	div {
		transition: width 0.3s ease;
	}
</style>
