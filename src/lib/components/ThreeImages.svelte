
	<script>
		// Bilder als Array übergeben: [{ src: '/images/foo.jpg', alt: '...' }, ...]
		export let images = [];
		// Abstand zwischen den Bildern
		export let gap = '1rem';
		// Abgerundete Ecken ein-/ausschalten
		export let rounded = true;
		// Optional: gewünschtes Seitenverhältnis (CSS aspect-ratio)
		export let aspectRatio = '4 / 3';
  
	</script>


<div class="image-grid" style={`--gap: ${gap}; --aspect: ${aspectRatio};`}>
	{#each images.slice(0, 3) as img (img.src)}
		<img
			class:rounded
			src={img.src}
			alt={img.alt ?? ''}
			loading="lazy"
			decoding="async"
		/>
	{/each}
</div>

<style>
	.image-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		align-items: stretch;
	}

	@media (max-width: 560px) {
		.image-grid {
            gap: 1rem;
		}
	}

	img {
		width: 100%;
		height: auto;
		display: block;
		aspect-ratio: var(--aspect, 4 / 3);
		object-fit: cover;
        margin: 0;
	}

	.rounded {
		border-radius: 6px;
	}
</style>

