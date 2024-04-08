<script>
	import CodeMirror from 'svelte-codemirror-editor';
	import { markdown } from '@codemirror/lang-markdown';
	import SvelteMarkdown from 'svelte-markdown';

	let editMode = false;
	let content = '# ABC\n> Wow';

	function toggleEditMode() {
		editMode = !editMode;
	}
</script>

<div class="flex justify-end">
	<button
		class="{editMode
			? 'bg-emerald-400 hover:bg-emerald-400'
			: 'bg-gray-400 hover:bg-gray-400'} text-white min-w-[100px] px-2 py-1 rounded-sm"
		on:click={toggleEditMode}
	>
		{#if editMode}
			Save
		{:else}
			Edit
		{/if}
	</button>
</div>
<div class="max-w-screen-lg">
	<div>
		{#if editMode}
			<CodeMirror bind:value={content} lang={markdown()} class="p-2 text-xl" />
		{:else if content !== null}
			<div class="prose p-4">
				<SvelteMarkdown source={content} />
			</div>
		{:else}
			<p>Loading ...</p>
		{/if}
	</div>
</div>
