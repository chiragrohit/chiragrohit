<script>
	import { SVG } from '@svgdotjs/svg.js';

	let container;

	let shapes = []; // To store circle references for parallax

	const generateRandomCircles = () => {
		const draw = SVG().addTo(container).size('100%', '100%');

		for (let i = 0; i < 10; i++) {
			const size = Math.floor(Math.random() * 100) + 50; // Random size between 50px and 150px
			const x = Math.random() * window.innerWidth;
			const y = Math.random() * window.innerHeight;
			const color = `hsla(${Math.random() * 360}, 70%, 60%, 0.35)`; // Semi-transparent color

			// Create a circle and store its reference
			const circle = draw.circle(size).fill(color).move(x, y);
			shapes.push({ circle, speed: Math.random() * 0.5 + 0.1 }); // Random speed factor
		}
	};

	const handleScroll = () => {
		const scrollY = window.scrollY;

		// Move circles based on their speed factor
		shapes.forEach(({ circle, speed }) => {
			circle.node.style.transform = `translateY(${scrollY * speed}px)`;
		});
	};

	$effect(() => {
		generateRandomCircles();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll); // Cleanup
		};
	});
</script>

<div bind:this={container} class="absolute inset-0 -z-10 pointer-events-none"></div>
