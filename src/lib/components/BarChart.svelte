<script>
	import { run } from 'svelte/legacy';

	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';

	/** @type {{filename?: string, chartTitle?: string, xAxisLabel?: string, yAxisLabel?: string}} */
	let {
		filename = '',
		chartTitle = 'Bar Chart',
		xAxisLabel = 'X Axis',
		yAxisLabel = 'Y Axis'
	} = $props();

	let chart;
	let chartElement = $state();
	let csvData = '';
	let parsedData = $state([]);
	let minRange = 0;
	let maxRange = $state(100);
	let currentMin = 0;
	let currentMax = $state(100);

	function parseCSV(csv) {
		const lines = csv.split('\n').filter((line) => line.trim() !== '');
		if (lines.length < 2) {
			console.error('CSV file does not contain enough data');
			return [];
		}

		const headers = lines[0].split(',').map((header) => header.trim());
		return lines
			.slice(1)
			.map((line) => {
				const values = line.split(',').map((value) => value.trim());
				if (values.length !== headers.length) {
					console.warn('Skipping malformed line:', line);
					return null;
				}
				return headers.reduce((obj, header, index) => {
					obj[header] = values[index];
					return obj;
				}, {});
			})
			.filter((item) => item !== null);
	}

	async function fetchCSVData() {
		try {
			const response = await fetch(filename);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			csvData = await response.text();
			parsedData = parseCSV(csvData);
			if (parsedData.length > 0) {
				parsedData.reverse(); // Optional, depending on your data ordering
				maxRange = parsedData.length - 1;
				currentMax = maxRange;
				createOrUpdateChart();
			} else {
				console.error('No valid data found in CSV file');
			}
		} catch (error) {
			console.error('Error fetching or parsing CSV file:', error);
		}
	}

	function createOrUpdateChart() {
		if (!chartElement || parsedData.length === 0) return;

		// Show only the filtered range of data
		const filteredData = parsedData.slice(currentMin, currentMax + 1);
		const labels = filteredData.map((row) => row[Object.keys(row)[0]]); // Year or X-axis values
		const data = filteredData.map((row) => {
			const value = parseFloat(row[Object.keys(row)[1]]);
			return isNaN(value) ? 0 : value;
		});

		if (chart) {
			chart.data.labels = labels;
			chart.data.datasets[0].data = data;
			chart.update();
		} else {
			const ctx = chartElement.getContext('2d');
			chart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: labels,
					datasets: [
						{
							label: yAxisLabel,
							data: data,
							backgroundColor: 'rgba(54, 162, 235, 0.2)',
							borderColor: 'rgba(54, 162, 235, 1)',
							borderWidth: 1
						}
					]
				},
				options: {
					responsive: true,
					plugins: {
						title: {
							display: true,
							text: chartTitle
						}
					},
					scales: {
						x: {
							title: {
								display: true,
								text: xAxisLabel
							}
						},
						y: {
							title: {
								display: true,
								text: yAxisLabel
							},
							beginAtZero: true
						}
					}
				}
			});
		}
	}

	// Update the chart when range changes
	function handleRangeChange() {
		createOrUpdateChart();
	}

	onMount(() => {
		if (filename) {
			fetchCSVData();
		}
	});

	// Update the chart when the data or the slider range changes
	run(() => {
		if (currentMin !== undefined && currentMax !== undefined) {
			handleRangeChange();
		}
	});
</script>

<!-- Chart and slider -->
<div class="chart-container p-4 bg-yellow-200 text-yellow-950 dark:bg-indigo-900 dark:text-white;">
	<canvas bind:this={chartElement}></canvas>

	<!-- Range slider showing the X-axis (years) values -->
	<div class="range-slider-container text-yellow-950 dark:text-white">
		<label for="range">Select Year Range:</label>
		<input
			type="range"
			id="range"
			min={minRange}
			max={maxRange}
			bind:value={currentMax}
			oninput={handleRangeChange}
		/>
	</div>

	<!-- Displaying the X-axis value (year) for the selected range -->
	<div class="range-values text-yellow-950 dark:text-white">
		<span
			>Year: {parsedData[currentMax]
				? parsedData[currentMax][Object.keys(parsedData[currentMax])[0]]
				: ''}</span
		>
	</div>
</div>

<style>
	.chart-container {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}
	.range-slider-container {
		width: 100%;
		margin-top: 20px;
	}
	.range-slider-container input[type='range'] {
		width: 100%;
	}
	.range-values {
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}
</style>
