---
title: Svelte in Markdown
description: Write svelte components in markdown
date: '2024-4-09'
categories:
  - sveltekit
  - svelte
published: true
---

<script>
    import Counter from '$lib/components/Counter.svelte'
</script>

# Svelte Counter Component

<Counter />

The counter is rendered inside Markdown.

# Code

## Counter.svelte

```
<script lang="ts">
	let count = 0;

	const increment = () => (count += 1);
</script>

<button on:click={increment} class="btn-primary px-12">
	{count}
</button>
```

## .md

```
<script>
    import Counter from 'Counter.svelte'
</script>

# Svelte Counter Component

The counter is rendered inside Markdown.

<Counter />
```
