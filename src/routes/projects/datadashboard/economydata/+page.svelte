<script>
	import BarChart from '$lib/components/BarChart.svelte';

	let india_gdp = '/data/india_gdp.csv';
</script>

<div class="max-w-screen-md mx-auto flex flex-col gap-8">
	<div>
		<h1 class="text-3xl text-center">India GDP Chart</h1>
		<BarChart
			filename={india_gdp}
			chartTitle="India GDP Data"
			xAxisLabel="Year"
			yAxisLabel="GDP (in USD Billion)"
		/>
	</div>
	<div>
		<h1 class="text-3xl text-center">India GDP Chart</h1>
		<BarChart
			filename={india_gdp}
			chartTitle="India GDP Data"
			xAxisLabel="Year"
			yAxisLabel="GDP (in USD Billion)"
		/>
	</div>
</div>
