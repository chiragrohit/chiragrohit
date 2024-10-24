<script>
	import CodeMirror from 'svelte-codemirror-editor';
	import { markdown } from '@codemirror/lang-markdown';
	import SvelteMarkdown from 'svelte-markdown';

	let editMode = $state(false);
	let content = $state('# Hello\n1. one\n2. two');

	function toggleEditMode() {
		editMode = !editMode;
	}
</script>

<div class="flex justify-end">
	<button class="btn-primary py-1" onclick={toggleEditMode}>
		{#if editMode}
			Save
		{:else}
			Edit
		{/if}
	</button>
</div>
<div class="">
	<div>
		{#if editMode}
			<CodeMirror
				class="p-2 text-xl"
				bind:value={content}
				lang={markdown()}
				styles={{
					'&': {
						width: '500px',
						maxWidth: '100%',
						height: '50rem'
					}
				}}
			/>
		{:else if content !== null}
			<div class="prose dark:prose-invert p-4">
				<SvelteMarkdown source={content} />
			</div>
		{:else}
			<p>Loading ...</p>
		{/if}
	</div>
</div>
