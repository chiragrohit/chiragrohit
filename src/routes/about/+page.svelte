<script>
	let message = '';
	let user = '';

	const fetchData = async () => {
		try {
			const response = await fetch('http://127.0.0.1:8000/api/hello');
			const data = await response.json();
			message = data.message; // Assuming the response contains a "message" field
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const fetchUser = async (userId) => {
		try {
			const response = await fetch(`http://127.0.0.1:8000/api/users/${userId}`);
			user = await response.json();
		} catch (error) {
			console.error('Error fetching user:', error);
		}
	};
</script>

<div class="p-4 flex justify-center">
	<h1 class="text-3xl font-bold">About</h1>
</div>
<main class="flex flex-col items-center">
	<div>
		<button on:click={fetchData} class="btn-primary">Click to get msg</button>
		{#if message}
			<p>{message}</p>
		{:else}
			<p>No Message</p>
		{/if}
	</div>
	<div>
		<button on:click={() => fetchUser(2)} class="btn-primary">Click to get User</button>
		{#if user}
			<p>{user.email}</p>
		{:else}
			<p>No Message</p>
		{/if}
	</div>
</main>
