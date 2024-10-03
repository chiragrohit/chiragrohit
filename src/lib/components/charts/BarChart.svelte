<script>
	import { onMount, onDestroy } from 'svelte';
	import { Chart } from 'chart.js/auto';

	export let labels = [];
	export let data = [];
	export let title = 'Bar Chart';

	let chart;
	let canvasId = Math.random().toString(36).substring(2, 15); // Unique ID for each chart

	onMount(() => {
		const ctx = document.getElementById(canvasId).getContext('2d');

		chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: labels,
				datasets: [
					{
						label: title,
						data: data,
						backgroundColor: 'rgba(75, 192, 192, 0.2)',
						borderColor: 'rgba(75, 192, 192, 1)',
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
	});

	// Cleanup the chart instance when the component is destroyed
	onDestroy(() => {
		if (chart) {
			chart.destroy();
		}
	});
</script>

<canvas id={canvasId}></canvas>

<style>
	canvas {
		max-width: 600px;
		margin: 0 auto;
	}
</style>
