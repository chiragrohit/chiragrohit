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

<h1 class="text-3xl font-bold">About</h1>

<main class="flex flex-col items-center">
	<button
		on:click={fetchData}
		class="bg-gray-600 px-4 py-2 text-white hover:bg-gray-300 hover:text-black"
		>Click to get msg</button
	>
	{#if message}
		<p>{message}</p>
	{:else}
		<p>No Message</p>
	{/if}
	<button
		on:click={() => fetchUser(2)}
		class="bg-gray-600 px-4 py-2 text-white hover:bg-gray-300 hover:text-black"
		>Click to get User</button
	>
	{#if user}
		<p>{user.email}</p>
	{:else}
		<p>No Message</p>
	{/if}
</main>
