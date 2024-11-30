<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	let searchQuery = $state('');
	let searchResults = $state([]);
	let selectedConstituency = $state(null);
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
		}, 500); // 1000ms debounce time
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

	let columnVisibility = $state({
		'EVM Votes': true,
		'Postal Votes': true
	});

	const toggleColumn = (column) => {
		columnVisibility[column] = !columnVisibility[column];
	};
</script>

<main class="max-w-screen-lg mx-auto">
	<h1 class="text-3xl text-center">Maharashtra Assembly 2024 Constituency Details</h1>
	<section class="mt-10">
		<!-- Party Vote Share -->
		<h1 class="text-3xl font-bold mb-4">Party-Wise Vote Share</h1>

		<!-- Party Stats Section -->
		<div class="mt-10">
			{#if data.partyStats.length > 0}
				<div class="overflow-x-auto shadow-lg rounded-lg mt-6 max-h-96 overflow-y-auto">
					<table class="min-w-full bg-white dark:bg-slate-800 rounded-lg">
						<thead class="bg-yellow-400 dark:bg-slate-700 sticky top-0">
							<tr>
								<th
									class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
								>
									Sr No
								</th>
								<th
									class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
								>
									Party
								</th>
								<th
									class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
								>
									Total Votes
								</th>
								<th
									class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
								>
									Vote Share %
								</th>
							</tr>
						</thead>
						<tbody>
							{#each data.partyStats as stat, index}
								<tr class="hover:bg-yellow-100 dark:hover:bg-slate-600">
									<td class="px-6 py-4 text-sm">{index + 1}</td>
									<!-- Display index -->
									<td class="px-6 py-4 text-sm">{stat.party}</td>
									<td class="px-6 py-4 text-sm">{stat.totalVotes.toLocaleString()}</td>
									<td class="px-6 py-4 text-sm">{stat.voteShare}%</td>
								</tr>
								<tr>
									<td colspan="4" class="px-6 py-2">
										<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full">
											<div
												class="h-2 rounded-full bg-green-500"
												style="width: {stat.voteShare}%"
											></div>
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{:else}
				<p class="text-center text-gray-500">Loading party stats...</p>
			{/if}
		</div>
	</section>

	<section class="mt-10">
		<h1 class="text-3xl font-bold mb-4">Constituency Details</h1>

		<div class=" p-2 max-h-[80vh] overflow-y-auto mt-4">
			<!-- Constituency Dropdown -->
			<select
				class="w-full p-3 mb-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-white"
				bind:value={selectedConstituencyNo}
				onchange={() => fetchConstituencyDetails(selectedConstituencyNo)}
			>
				<option value="" disabled selected>Select Constituency</option>
				{#each data.constituencies as constituency}
					<option value={constituency['Constituency No']}>
						{constituency['Constituency Name']} - {constituency['Constituency No']}
					</option>
				{/each}
			</select>

			<!-- Search Input -->
			<input
				bind:value={searchQuery}
				placeholder="Search for a candidate by name..."
				class="input"
				oninput={debounce}
			/>

			<!-- Search Results -->
			<div class="max-h-[50vh] overflow-y-auto">
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

		<div class="mt-4">
			{#if selectedConstituency}
				<!-- Display selected constituency details -->
				<div class="mt-6">
					<h2 class="text-2xl font-bold mb-4">
						{selectedConstituency['Constituency No']} - {selectedConstituency['Constituency Name']}
					</h2>

					<!-- Column Visibility Checklist -->
					<div class="mb-4">
						<div class="flex flex-wrap gap-4 justify-end">
							{#each Object.keys(columnVisibility) as column}
								<label class="flex items-center space-x-2">
									<input
										type="checkbox"
										checked={columnVisibility[column]}
										onchange={() => toggleColumn(column)}
										class="rounded text-yellow-500"
									/>
									<span>{column}</span>
								</label>
							{/each}
						</div>
					</div>
					<!-- Display candidates -->
					<div class="overflow-x-auto shadow-lg rounded-lg mt-6">
						<table class="min-w-full bg-white dark:bg-slate-800 rounded-lg">
							<thead class="bg-yellow-400 dark:bg-slate-700 sticky top-0">
								<tr>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
									>
										Sr No
									</th>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
									>
										Candidate
									</th>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
									>
										Party
									</th>
									{#if columnVisibility['EVM Votes']}
										<th
											class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
										>
											EVM Votes
										</th>
									{/if}
									{#if columnVisibility['Postal Votes']}
										<th
											class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
										>
											Postal Votes
										</th>
									{/if}
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
									>
										Total Votes
									</th>
									<th
										class="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100"
									>
										Percentage of Votes
									</th>
								</tr>
							</thead>
							<tbody>
								{#each selectedConstituency.Candidates as candidate, index}
									<tr
										class="hover:bg-yellow-100 dark:hover:bg-slate-600 text-gray-800 dark:text-gray-100"
									>
										<td class="px-6 py-4 text-sm">{index + 1}</td>

										<td class="px-6 py-4 text-sm">{candidate.Candidate}</td>

										<td class="px-6 py-4 text-sm">{candidate.Party}</td>

										{#if columnVisibility['EVM Votes']}
											<td class="px-6 py-4 text-sm">{candidate['EVM Votes'].toLocaleString()}</td>
										{/if}
										{#if columnVisibility['Postal Votes']}
											<td class="px-6 py-4 text-sm">{candidate['Postal Votes'].toLocaleString()}</td
											>
										{/if}

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
                                                    #00b300 {candidate['Percentage of Votes']}%, 
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
				</div>
			{:else}
				<p class="text-center text-gray-500">
					Select a constituency or search for a candidate to view details
				</p>
			{/if}
		</div>
	</section>
</main>
