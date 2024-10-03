<script>
	import { onMount, onDestroy } from 'svelte';
	import { Chart } from 'chart.js/auto';

	// India GDP data for the last 10 years
	let indiaGDPData = {
		currentYear: {
			year: 2023,
			gdp: 3400000 // Example GDP data for 2023
		},
		trend: [
			{ year: 2022, gdp: 3200000 },
			{ year: 2021, gdp: 3000000 },
			{ year: 2020, gdp: 2800000 },
			{ year: 2019, gdp: 2600000 },
			{ year: 2018, gdp: 2500000 },
			{ year: 2017, gdp: 2300000 },
			{ year: 2016, gdp: 2200000 },
			{ year: 2015, gdp: 2000000 },
			{ year: 2014, gdp: 1800000 },
			{ year: 2013, gdp: 1600000 }
		]
	};

	let chart;
	let showTrend = false;
	let chartData = [];

	function createChart() {
		const ctx = document.getElementById('gdpChart').getContext('2d');
		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: [indiaGDPData.currentYear.year], // Default to current year
				datasets: [
					{
						label: 'India GDP (in USD)',
						data: [indiaGDPData.currentYear.gdp], // Default to current year's data
						backgroundColor: 'rgba(54, 162, 235, 0.2)',
						borderColor: 'rgba(54, 162, 235, 1)',
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	}

	// Function to update the chart with trend data or reset to current year
	function updateChart(trend) {
		if (trend) {
			// Sort the trend data in ascending order by year
			const sortedTrend = [...indiaGDPData.trend].sort((a, b) => a.year - b.year);
			chart.data.labels = sortedTrend.map((item) => item.year);
			chart.data.datasets[0].data = sortedTrend.map((item) => item.gdp);
		} else {
			chart.data.labels = [indiaGDPData.currentYear.year];
			chart.data.datasets[0].data = [indiaGDPData.currentYear.gdp];
		}
		chart.update();
	}

	onMount(() => {
		createChart();
	});

	onDestroy(() => {
		if (chart) {
			chart.destroy();
		}
	});

	// Hover event functions
	function showTrendData() {
		updateChart(true); // Show trend data
	}

	function showCurrentYearData() {
		updateChart(false); // Reset to current year data
	}
</script>

<div class="max-w-screen-md mx-auto flex flex-col gap-8">
	<!-- Economy Data -->
	<div class="text-3xl">Economy Data</div>
	<div
		class="border-2 border-yellow-800 dark:border-slate-600 rounded-md p-4 text-center bg-yellow-200 hover:bg-yellow-300 dark:bg-slate-900 dark:hover:bg-slate-800 transition duration-300"
		on:mouseover={showTrendData}
		on:mouseout={showCurrentYearData}
	>
		<h2 class="text-xl font-bold">India GDP Data</h2>
		<canvas id="gdpChart" class="w-full max-w-full"></canvas>
	</div>
</div>
