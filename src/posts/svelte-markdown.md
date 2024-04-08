---
title: Svelte in Markdown
description: Write svelte components in markdown
date: '2023-4-16'
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

```
<script>
    import Counter from '$lib/components/Counter.svelte'
</script>

# Svelte Counter Component

The counter is rendered inside Markdown.

<Counter />
```
