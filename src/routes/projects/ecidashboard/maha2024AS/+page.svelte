<script lang="ts">
	let searchQuery = $state('');
	let searchResults = $state([]);
	let selectedConstituency = $state(null); // To hold the selected constituency details
	let timer: NodeJS.Timeout;

	// Debounced API call for candidate search
	const debounce = (e: Event) => {
		clearTimeout(timer); // Clear the previous timeout
		timer = setTimeout(async () => {
			const query = (e.target as HTMLInputElement).value; // Get the current input value
			if (!query) {
				searchResults = []; // Reset results if query is empty
				return;
			}

			const response = await fetch(`/api/elections/search?name=${encodeURIComponent(query)}`);
			if (response.ok) {
				const data = await response.json();
				searchResults = data; // Update results
			} else {
				console.error('Failed to fetch candidates');
			}
		}, 1000); // 1000ms debounce time
	};

	// Fetch constituency details when a candidate is clicked
	const fetchConstituencyDetails = async (constituencyNo: string) => {
		const response = await fetch(`/api/elections/constituency/${constituencyNo}`);
		if (response.ok) {
			const data = await response.json();
			selectedConstituency = data; // Update the selected constituency details
		} else {
			console.error('Failed to fetch constituency details');
		}
	};

	const getMaxVotesCandidate = () => {
		if (!selectedConstituency?.Candidates) return null;
		return Math.max(...selectedConstituency.Candidates.map((c) => c['Total Votes']));
	};
</script>

<main class="flex flex-col md:flex-row gap-8">
	<!-- Left Side (1/4 of the space) -->
	<div class="w-full sm:w-1/4 p-2 max-h-[80vh] overflow-y-auto mt-4">
		<h1 class="text-2xl font-semibold mb-6">Candidate Search</h1>

		<!-- Search Input -->
		<input
			bind:value={searchQuery}
			placeholder="Search for a candidate by name..."
			class="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-white"
			oninput={debounce}
		/>

		<!-- Search Results -->
		<div class="">
			{#if searchResults.length > 0}
				<ul class="space-y-4">
					{#each searchResults as result}
						<!-- On Click, fetch constituency details -->
						<a href="#" onclick={() => fetchConstituencyDetails(result['Constituency No'])}>
							<li
								class="rounded-lg shadow-md mt-2 bg-yellow-200 hover:bg-yellow-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 p-4 transition-all"
							>
								<span class="flex justify-between align-middle items-center">
									<p class="font-bold text-md">{result.Candidate}</p>
									<p class="text-sm text-gray-600 dark:text-gray-300">
										{result['Constituency Name']}
									</p>
								</span>
								<p class="text-sm text-gray-600 dark:text-gray-300">
									{result.Party}
								</p>
							</li>
						</a>
					{/each}
				</ul>
			{:else if searchQuery}
				<p class="text-gray-500">No results found for "{searchQuery}"</p>
			{/if}
		</div>
	</div>

	<!-- Right Side (3/4 of the space) -->
	<div class="mt-4 w-full sm:w-3/4">
		<h1 class="text-3xl text-center">Maharashtra Assembly 2024 Constituency Details</h1>
		{#if selectedConstituency}
			<!-- Display selected constituency details -->
			<div class="mt-6">
				<h2 class="text-2xl font-bold mb-4">
					{selectedConstituency['Constituency No']} - {selectedConstituency['Constituency Name']}
				</h2>

				<!-- Display candidates -->
				<ul class="space-y-4 mt-4">
					<div class="overflow-x-auto shadow-lg rounded-lg mt-6">
						<table class="min-w-full bg-white dark:bg-slate-800 rounded-lg">
							<thead class="bg-yellow-400 dark:bg-slate-700">
								<tr>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
										>Sr No</th
									>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
										>Candidate</th
									>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
										>Party</th
									>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
										>EVM Votes</th
									>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
										>Postal Votes</th
									>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
										>Total Votes</th
									>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
										>Percentage of Votes</th
									>
								</tr>
							</thead>
							<tbody>
								{#each selectedConstituency.Candidates as candidate, index}
									<tr
										class="hover:bg-yellow-100 dark:hover:bg-slate-600"
										class:bg-yellow-300={candidate['Total Votes'] === getMaxVotesCandidate()}
										class:dark:bg-gray-600={candidate['Total Votes'] === getMaxVotesCandidate()}
									>
										<td class="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">{index + 1}</td>
										<!-- Sr No -->
										<td class="px-6 py-4 text-sm text-gray-800 dark:text-gray-100"
											>{candidate.Candidate}</td
										>
										<td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300"
											>{candidate.Party}</td
										>
										<td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300"
											>{candidate['EVM Votes'].toLocaleString()}</td
										>
										<td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300"
											>{candidate['Postal Votes'].toLocaleString()}</td
										>
										<td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300"
											>{candidate['Total Votes'].toLocaleString()}</td
										>
										<td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300"
											>{candidate['Percentage of Votes']}%</td
										>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</ul>
			</div>
		{:else}
			<p class="text-center text-gray-500">Click a candidate to view constituency details</p>
		{/if}
	</div>
</main>
