<script>
    import { onMount } from "svelte";

    export let src = "";
    export let alt = "";
    export let poster = "";
    export let sectionHeight = 260;
    export let sidePadding = 1.5;
    export let topBottomPadding = 4;

    let sectionElement;
    let videoElement;
    let isPlaying = true;
    let isHovered = false;
    let pointerX = 0;
    let pointerY = 0;
    let frameWidth = 0;
    let frameHeight = 0;
    let borderRadius = 0;
    let isReady = false;

    const playCursor = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'><path d='M18 15.5L33 24L18 32.5V15.5Z' fill='white'/></svg>`)}") 18 24, pointer`;
    const pauseCursor = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'><rect x='17' y='15' width='5' height='18' rx='1' fill='white'/><rect x='26' y='15' width='5' height='18' rx='1' fill='white'/></svg>`)}") 21 24, pointer`;

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function smoothstep(value) {
        return value * value * (3 - 2 * value);
    }

    function updatePointer(event) {
        pointerX = event.clientX;
        pointerY = event.clientY;
    }

    async function togglePlayback() {
        if (!videoElement) {
            return;
        }

        if (videoElement.paused) {
            try {
                await videoElement.play();
                isPlaying = true;
            } catch {
                isPlaying = false;
            }
        } else {
            videoElement.pause();
            isPlaying = false;
        }
    }

    function updateFrame() {
        if (!sectionElement || typeof window === "undefined") {
            return;
        }

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const availableWidth = Math.max(
            sectionElement.clientWidth - sidePadding * 2 * 16,
            0,
        );
        const maxInitialHeight = Math.max(viewportHeight - topBottomPadding * 2 * 16, 0);
        const maxInitialWidthByHeight = maxInitialHeight * (16 / 9);
        const initialWidth = Math.max(
            320,
            Math.min(
                availableWidth,
                viewportWidth - sidePadding * 2 * 16,
                maxInitialWidthByHeight,
                1100,
            ),
        );
        const initialHeight = initialWidth * (9 / 16);

        const sectionTop = sectionElement.offsetTop;
        const maxScroll = Math.max(sectionElement.offsetHeight - viewportHeight, 1);
        const scrollInside = clamp(window.scrollY - sectionTop, 0, maxScroll);
        const linearProgress = scrollInside / maxScroll;
        const triangularProgress = 1 - Math.abs(linearProgress - 0.5) * 2;
        const easedProgress = smoothstep(clamp(triangularProgress, 0, 1));

        frameWidth = initialWidth + (viewportWidth - initialWidth) * easedProgress;
        frameHeight = initialHeight + (viewportHeight - initialHeight) * easedProgress;
        borderRadius = 24 * (1 - easedProgress);
        isReady = true;
    }

    onMount(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) {
                return;
            }

            ticking = true;
            requestAnimationFrame(() => {
                updateFrame();
                ticking = false;
            });
        };

        updateFrame();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", updateFrame, { passive: true });

        if (videoElement) {
            videoElement.play().catch(() => {
                // Autoplay can still be blocked by the browser; muted playback keeps the component usable.
                isPlaying = false;
            });
            isPlaying = !videoElement.paused;
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateFrame);
        };
    });

    $: frameStyle = `width: ${frameWidth}px; height: ${frameHeight}px; border-radius: ${borderRadius}px;`;
</script>

<section
    bind:this={sectionElement}
    class="scroll-video-section"
    style={`height: ${sectionHeight}vh;`}
>
    <div
        class:is-visible={isHovered}
        class="scroll-video-cursor"
        style={`left: ${pointerX}px; top: ${pointerY}px;`}
        aria-hidden="true"
    >
        {#if isPlaying}
            <svg viewBox="0 0 48 48" aria-hidden="true">
                <rect x="17" y="15" width="5" height="18" rx="1" />
                <rect x="26" y="15" width="5" height="18" rx="1" />
            </svg>
        {:else}
            <svg viewBox="0 0 48 48" aria-hidden="true">
                <path d="M18 15.5L33 24L18 32.5V15.5Z" />
            </svg>
        {/if}
    </div>
    <div class="scroll-video-sticky">
        <div
            class:is-ready={isReady}
            class="scroll-video-frame"
            style={frameStyle}
            on:pointerenter={(event) => {
                isHovered = true;
                updatePointer(event);
            }}
            on:pointerleave={() => {
                isHovered = false;
            }}
            on:pointermove={updatePointer}
            on:click={togglePlayback}
            role="button"
            tabindex="0"
            aria-label={isPlaying ? `Pause ${alt}` : `Play ${alt}`}
            on:keydown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    togglePlayback();
                }
            }}
        >
            <video
                bind:this={videoElement}
                {src}
                {poster}
                autoplay
                muted
                playsinline
                loop
                preload="auto"
                aria-label={alt}
                title={alt}
                on:play={() => (isPlaying = true)}
                on:pause={() => (isPlaying = false)}
            >
                <slot />
            </video>
        </div>
    </div>
</section>

<style>
    .scroll-video-section {
        position: relative;
        width: 100vw;
        left: 50%;
        margin-left: -50vw;
        padding: 4rem 0;
    }

    .scroll-video-sticky {
        position: sticky;
        top: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1.5rem;
    }

    .scroll-video-frame {
        position: relative;
        overflow: hidden;
        background: #000;
        cursor: none;
        opacity: 0;
        transform: translateY(16px);
        transition: opacity 180ms ease, transform 180ms ease, border-radius 180ms ease;
        will-change: width, height, border-radius;
    }

    .scroll-video-frame.is-ready {
        opacity: 1;
        transform: translateY(0);
    }

    .scroll-video-frame video {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        border: 0;
        outline: 0;
        border-radius: inherit;
        background: #000;
    }

    .scroll-video-cursor {
        position: fixed;
        z-index: 3;
        width: 3.25rem;
        height: 3.25rem;
        transform: translate(-50%, -50%) scale(0.92);
        opacity: 0;
        pointer-events: none;
        mix-blend-mode: difference;
        transition: opacity 160ms ease, transform 160ms ease;
    }

    .scroll-video-cursor.is-visible {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }

    .scroll-video-cursor svg {
        width: 100%;
        height: 100%;
        display: block;
        fill: white;
    }

    @media (max-width: 800px) {
        .scroll-video-section {
            padding: 2.5rem 0;
        }

        .scroll-video-sticky {
            padding: 0 1rem;
        }
    }
</style>