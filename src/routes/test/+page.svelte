<script>
	let message = '';
	let user = '';
	let allUsers = '';
	let modalRes = '';

	const fetchData = async () => {
		try {
			const response = await fetch('http://127.0.0.1:8000/api/hello');
			const data = await response.json();
			message = data.message; // Assuming the response contains a "message" field
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const fetchById = async (userId) => {
		try {
			const response = await fetch(`http://127.0.0.1:8000/api/users/${userId}`);
			user = await response.json();
		} catch (error) {
			console.error('Error fetching user:', error);
		}
	};

	const fetchUser = async () => {
		try {
			const response = await fetch(`http://127.0.0.1:8000/api/users`);
			allUsers = await response.json();
		} catch (error) {
			console.error('Error fetching all users:', error);
		}
	};

	const fetchDataFromModal = async () => {
		try {
			const response = await fetch('/api/hello');
			const data = await response.json();
			console.log('data from /test/+page.svelte: ', data);
			modalRes = data.message; // Assuming the response contains a "message" field
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
</script>

<div>
	<h1 class="text-3xl">Test</h1>
</div>
<div class="p-4 flex flex-col">
	<div>
		<button on:click={fetchData} class="btn-primary">Click to get msg</button>
		{#if message}
			<p>{message}</p>
		{:else}
			<p>No Message</p>
		{/if}
	</div>
	<div>
		<button on:click={() => fetchById(2)} class="btn-primary">Click to get userById</button>
		{#if user}
			<p>{user.email}</p>
		{:else}
			<p>No Message</p>
		{/if}
	</div>
	<div>
		<button on:click={fetchUser} class="btn-primary">Click to get all Users</button>
		{#if allUsers}
			<div class="flex flex-col space-y-4 mt-2">
				{#each allUsers as user}
					<div class="bg-gray-200 p-2">
						<p>ID: {user.id}</p>
						<p>Username: {user.username}</p>
						<p>Email: {user.email}</p>
						<p>Age: {user.age}</p>
					</div>
				{/each}
			</div>
		{:else}
			<p>No Message</p>
		{/if}
	</div>
	<div>
		<button on:click={fetchDataFromModal} class="btn-primary">Protected users from Modal</button>
		{#if modalRes}
			<p>{modalRes}</p>
		{:else}
			<p>No Message</p>
		{/if}
	</div>
</div>
