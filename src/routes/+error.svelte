<script>
	import { page } from '$app/stores';
</script>

<div class="error-container">
	<div class="error-code">{$page.status}</div>
	<div class="error-message">{$page.error.message}</div>
</div>

<style>
	/* Add your custom styles here */
	.error-container {
		text-align: center;
	}

	.error-code {
		font-size: 6rem;
		font-weight: bold;
		color: #ff5555; /* Custom color for error code */
	}

	.error-message {
		font-size: 1.5rem;
		color: #333;
	}
</style>
