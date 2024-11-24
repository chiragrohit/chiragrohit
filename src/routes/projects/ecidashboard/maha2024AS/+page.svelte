<script lang="ts">
	let searchQuery = $state('');
	let searchResults = $state([]);
	let constituencies = $state([]);
	let selectedConstituency = $state(null); // To hold the selected constituency details
	let selectedConstituencyNo = $state('');
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

	// Fetch constituencies list when the component mounts
	const fetchConstituencies = async () => {
		const response = await fetch('/api/elections/constituencies');
		if (response.ok) {
			constituencies = await response.json();
			// Sort constituencies by name
			constituencies.sort((a, b) => {
				const nameA = a['Constituency Name'].toLowerCase();
				const nameB = b['Constituency Name'].toLowerCase();
				if (nameA < nameB) return -1;
				if (nameA > nameB) return 1;
				return 0;
			});
		} else {
			console.error('Failed to fetch constituencies');
		}
	};

	// Fetch constituency details when a candidate is clicked
	const fetchConstituencyDetails = async (constituencyNo: string) => {
		const response = await fetch(`/api/elections/constituency/${constituencyNo}`);
		if (response.ok) {
			const data = await response.json();
			selectedConstituency = data; // Update the selected constituency details
			searchResults = [];
			searchQuery = '';
			selectedConstituencyNo = constituencyNo;
		} else {
			console.error('Failed to fetch constituency details');
		}
	};

	$effect(() => {
		fetchConstituencies();
	});
</script>

<main class="flex flex-col md:flex-row gap-8">
	<!-- Left Side (1/4 of the space) -->
	<div class="w-full md:w-1/4 p-2 max-h-[80vh] overflow-y-auto mt-4">
		<h1 class="text-2xl font-semibold mb-6">Candidate Search</h1>
		<!-- Constituency Dropdown -->
		<select
			class="w-full p-3 mb-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-white"
			bind:value={selectedConstituencyNo}
			onchange={() => fetchConstituencyDetails(selectedConstituencyNo)}
		>
			<option value="" disabled selected>Select Constituency</option>
			{#each constituencies as constituency}
				<option value={constituency['Constituency No']}>
					{constituency['Constituency Name']} - {constituency['Constituency No']}
				</option>
			{/each}
		</select>

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
										class="hover:bg-yellow-100 dark:hover:bg-slate-600 text-gray-800 dark:text-gray-100"
									>
										<td class="px-6 py-4 text-sm">{index + 1}</td>
										<!-- Sr No -->
										<td class="px-6 py-4 text-sm">{candidate.Candidate}</td>
										<td class="px-6 py-4 text-sm">{candidate.Party}</td>
										<td class="px-6 py-4 text-sm">{candidate['EVM Votes'].toLocaleString()}</td>
										<td class="px-6 py-4 text-sm">{candidate['Postal Votes'].toLocaleString()}</td>
										<td class="px-6 py-4 text-sm">{candidate['Total Votes'].toLocaleString()}</td>
										<td class="px-6 py-4 text-sm">{candidate['Percentage of Votes']}%</td>
									</tr>
									<tr>
										<td colspan="7" class="px-6 py-2">
											<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full">
												<div
													class="h-2 rounded-full"
													style="
                                                        background: linear-gradient(to right, 
                                                            #00b300 {candidate[
														'Percentage of Votes'
													]}%, 
                                                            transparent {candidate[
														'Percentage of Votes'
													]}%);
                                                        "
												></div>
											</div>
										</td>
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
