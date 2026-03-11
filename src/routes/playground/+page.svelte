<script>
    const cardDefs = [
        {
            key: 'xtend',
            title: 'Xtend',
            description: 'The innovative way of playing Jenga',
            imgUrl: '/images/XtendCard_mobile.png',
            dark: false,
            rotation: -6,
            initX: 12, initY: 18,
            mobileX: 4, mobileY: 9,
            route: '/playground/xtend',
        },
        {
            key: 'photo',
            title: 'Photography',
            description: 'A personal selection of photos',
            imgUrl: '/images/gallerie/17.jpg',
            dark: false,
            rotation: 4,
            initX: 28, initY: 55,
            mobileX: 5, mobileY: 65,
            route: '/playground/photo',
        },
        {
            key: 'respiratory',
            title: 'Respiratory System',
            description: 'An interactive exhibition design',
            imgUrl: '/images/RespyCard.png',
            dark: false,
            imgOnly: true,
            rotation: 3,
            initX: 60, initY: 14,
            mobileX: 58, mobileY: 4,
            route: '/playground/respiratorysystem',
            videoUrl: 'https://www.youtube.com/embed/wimssUKgVVg',
        },
        {
            key: 'growceries',
            title: 'Growceries',
            description: 'Connecting local farmers to reduce food waste',
            imgUrl: '/images/Growceries/Grow3.png',
            dark: true,
            imgOnly: true,
            rotation: -3,
            initX: 62, initY: 58,
            mobileX: 55, mobileY: 67,
            route: '/playground/growceries',
            videoUrl: 'https://www.youtube.com/embed/Di2I94OvIoo',
        },
        {
            key: 'favicon',
            title: 'favicon',
            imgUrl: '/images/faviconHighRes.png',
            dark: false,
            rotation: 8,
            initX: 27, initY: 51,
            mobileX: 61, mobileY: 30,
            route: null,
        },
    ];

    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    let cards = cardDefs.map((c, i) => ({ ...c, x: 0, y: 0, dragging: false, hasDragged: false, settling: false, entered: false, hoverRot: -c.rotation }));
    let activeOverlay = null;
    let mounted = false;

    // Unlock html scroll when overlay is open so iOS can scroll inside it
    $: if (browser && mounted) {
        if (activeOverlay) {
            document.documentElement.style.position = '';
            document.documentElement.style.overflow = '';
        } else {
            document.documentElement.style.position = 'fixed';
            document.documentElement.style.overflow = 'hidden';
        }
    }

    onDestroy(() => {
        if (browser) {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.documentElement.style.position = '';
            document.documentElement.style.width = '';
        }
    });

    onMount(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.position = 'fixed';
        document.documentElement.style.width = '100%';
        const mobile = window.innerWidth <= 600;
        cards = cards.map(c => ({
            ...c,
            x: ((mobile && c.mobileX != null ? c.mobileX : c.initX) / 100) * window.innerWidth,
            y: ((mobile && c.mobileY != null ? c.mobileY : c.initY) / 100) * window.innerHeight,
        }));
        mounted = true;
    });

    let dragIndex = null;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    let dragStartX = 0;
    let dragStartY = 0;

    function onPointerDown(e, i) {
        e.preventDefault();
        dragIndex = i;
        dragOffsetX = e.clientX - cards[i].x;
        dragOffsetY = e.clientY - cards[i].y;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        cards[i].dragging = true;
        cards[i].hasDragged = false;
        e.currentTarget.setPointerCapture(e.pointerId);
    }

    function onPointerMove(e) {
        if (dragIndex === null) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) cards[dragIndex].hasDragged = true;
        cards[dragIndex].x = e.clientX - dragOffsetX;
        cards[dragIndex].y = e.clientY - dragOffsetY;
        cards = cards;
    }

    function onPointerUp(i) {
        if (dragIndex === null) return;
        const wasDragged = cards[i].hasDragged;
        cards[i].dragging = false;
        dragIndex = null;
        if (wasDragged) {
            cards[i].settling = true;
            setTimeout(() => { cards[i].settling = false; cards = cards; }, 500);
        } else if (cards[i].route) {
            activeOverlay = cards[i];
        }
    }

    function onCardEntered(i) {
        cards[i].entered = true;
        cards = cards;
    }

    function closeOverlay(e) {
        if (e.target === e.currentTarget) activeOverlay = null;
    }
</script>

<svelte:head>
    <title>Playground — Tim Bluthardt</title>
    <meta name="description" content="An interactive playground showcasing Interaction Design projects by Tim Bluthardt — drag, explore, and discover." />
    <link rel="canonical" href="https://timbluthardt.com/playground" />
    <meta property="og:title" content="Playground — Tim Bluthardt" />
    <meta property="og:description" content="An interactive canvas of Interaction Design projects." />
    <meta property="og:url" content="https://timbluthardt.com/playground" />
    <meta name="robots" content="noindex" />
    <!-- Preload card images -->
    <link rel="preload" as="image" href="/images/XtendCard_mobile.png" />
    <link rel="preload" as="image" href="/images/gallerie/17.jpg" />
    <link rel="preload" as="image" href="/images/RespyCard.png" />
    <link rel="preload" as="image" href="/images/Growceries/Grow3.png" />
    <link rel="preload" as="image" href="/images/faviconHighRes.png" />
</svelte:head>

<svelte:window on:pointermove={onPointerMove} />

<div class="canvas">
    <div class="checker-bg"></div>
    <div class="canvas-center">
        <h1>My Playground</h1>
        <p class="sub">Interaction Design · Portfolio</p>
    </div>

    {#if mounted}
        {#each cards as card, i}
            <div
                class="float-card-anchor"
                class:photo-anchor={card.key === 'photo'}
                class:imgonly-anchor={card.imgOnly}
                class:favicon-anchor={card.key === 'favicon'}
                style="transform: translate({card.x}px, {card.y}px) rotate({card.rotation}deg)"
                on:pointerdown={(e) => onPointerDown(e, i)}
                on:pointerup={() => onPointerUp(i)}
                role="button"
                tabindex="0"
                aria-label="Open {card.title}"
            >
                {#if card.key === 'favicon'}
                    <div
                        class="float-card favicon-card"
                        class:dragging={card.dragging}
                        class:settling={card.settling}
                        class:entered={card.entered}
                        style="--i: {i}; --hover-rot: {card.hoverRot}deg"
                        on:animationend={() => onCardEntered(i)}
                    >
                        <img src={card.imgUrl} alt="favicon" draggable="false" class="favicon-img" />
                    </div>
                {:else if card.key === 'photo'}
                    <div
                        class="float-card photo-card"
                        class:dragging={card.dragging}
                        class:settling={card.settling}
                        class:entered={card.entered}
                        style="--i: {i}; --hover-rot: {card.hoverRot}deg"
                        on:animationend={() => onCardEntered(i)}
                    >
                        <img src={card.imgUrl} alt={card.title} draggable="false" class="photo-only-img" />
                    </div>
                {:else if card.imgOnly}
                    <div
                        class="float-card imgonly-card"
                        class:dark={card.dark}
                        class:dragging={card.dragging}
                        class:settling={card.settling}
                        class:entered={card.entered}
                        style="--i: {i}; --hover-rot: {card.hoverRot}deg"
                        on:animationend={() => onCardEntered(i)}
                    >
                        <img src={card.imgUrl} alt={card.title} draggable="false" class="imgonly-img" />
                    </div>
                {:else}
                    <div
                        class="float-card"
                        class:dark={card.dark}
                        class:dragging={card.dragging}
                        class:settling={card.settling}
                        class:entered={card.entered}
                        style="--i: {i}; --hover-rot: {card.hoverRot}deg"
                        on:animationend={() => onCardEntered(i)}
                    >
                        <div class="card-body">
                            <div class="card-meta">
                                <p class="card-title">{card.title}</p>
                                <p class="card-desc">{card.description}</p>
                            </div>
                            <div class="card-img">
                                <img src={card.imgUrl} alt={card.title} draggable="false" />
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        {/each}
    {/if}

</div>

{#if activeOverlay}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="overlay-backdrop" on:click={closeOverlay}>
        <div class="overlay-card" class:overlay-gallery={activeOverlay.key === 'xtend'} class:overlay-video-card={activeOverlay.videoUrl}>
            <button class="overlay-close" on:click={() => activeOverlay = null}>✕</button>
            {#if activeOverlay.key === 'xtend'}
                <div class="xtend-gallery">
                    <img src="/images/Xtend/prototype.png" alt="" draggable="false" />
                    <img src="/images/Xtend/robot.png" alt="" draggable="false" />
                    <img src="/images/Xtend/robotControlls.png" alt="" draggable="false" />
                    <img src="/images/Xtend/xtend.png" alt="" draggable="false" />
                </div>
            {:else if activeOverlay.videoUrl}
                <div class="overlay-video-wrap">
                    <iframe
                        src="{activeOverlay.videoUrl}?autoplay=1&rel=0"
                        title={activeOverlay.title}
                        class="overlay-video"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowfullscreen
                    ></iframe>
                </div>
            {:else}
                <iframe
                    src="{activeOverlay.route}?embed=1"
                    title={activeOverlay.title}
                    class="overlay-iframe"
                    frameborder="0"
                ></iframe>
            {/if}
        </div>
    </div>
{/if}

<style>


    .canvas {
        position: fixed;
        inset: 0;
        background: var(--bg);
        overflow: hidden;
        user-select: none;
        touch-action: none;
    }

    .checker-bg {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background-image:
            repeating-linear-gradient(0deg, var(--checker) 0px, var(--checker) 1px, transparent 1px, transparent 25px),
            repeating-linear-gradient(90deg, var(--checker) 0px, var(--checker) 1px, transparent 1px, transparent 25px);
        background-size: 25px 25px;
        -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%);
        mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%);
    }

    :global(html[data-theme='dark']) .checker-bg {
        --checker: rgba(255,255,255,0.04);
    }

    :global(html:not([data-theme='dark'])) .checker-bg {
        --checker: rgba(0,0,0,0.035);
    }

    .canvas-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        pointer-events: none;
    }

    .canvas-center h1 {
        font-family: 'Playfair Display', serif;
        font-size: 3rem;
        font-weight: 400;
        color: var(--text);
        margin: 0 0 0.25rem;
    }

    .canvas-center .sub {
        color: var(--muted);
        margin: 0;
    }

    .float-card-anchor {
        position: absolute;
        top: 0;
        left: 0;
        width: 320px;
        cursor: grab;
        will-change: transform;
        touch-action: none;
    }


    .float-card {
        width: 100%;
        background: #f5f5f5;
        border-radius: 18px;
        padding: 20px;
        position: relative;
        box-shadow:
            0 1px 2px rgba(0,0,0,0.10),
            0 4px 8px rgba(0,0,0,0.09),
            0 10px 20px rgba(0,0,0,0.08),
            0 20px 40px rgba(0,0,0,0.06);
        transition: box-shadow 0.2s ease, scale 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.1), rotate 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2);
        transform-origin: center center;
        animation: blobIn 0.5s cubic-bezier(0.34, 1.1, 0.64, 1) both;
        animation-delay: calc(var(--i, 0) * 50ms);
    }

    .float-card.entered {
        animation: none;
    }

    @keyframes blobIn {
        0%   { scale: 0.6; opacity: 0; }
        60%  { opacity: 1; }
        100% { scale: 1; opacity: 1; }
    }

    .float-card:not(.dragging):not(.settling):hover {
        scale: 1.04;
        rotate: var(--hover-rot, 2deg);
    }

    .float-card.dark { background: #111; }

    .photo-anchor {
        width: 230px;
    }

    .imgonly-anchor {
        width: 150px;
    }

    .imgonly-card {
        width: 150px;
        height: 150px;
        padding: 0;
        overflow: hidden;
        position: relative;
    }

    .imgonly-card.dark {
        background: #111;
    }

    .imgonly-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 18px;
        pointer-events: none;
    }

    .favicon-anchor {
        width: 72px;
    }

    .favicon-card {
        width: 72px;
        height: 72px;
        padding: 0;
        background: transparent;
        box-shadow: none;
        border-radius: 12px;
        transition: scale 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.1), rotate 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.2);
    }

    .favicon-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
        pointer-events: none;
        user-select: none;
    }

    .photo-card {
        width: 230px;
        height: 230px;
        padding: 0;
        overflow: hidden;
        position: relative;
    }

    .photo-only-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 18px;
        pointer-events: none;
    }

    .float-card-anchor.dragging, .float-card-anchor:has(.dragging) { cursor: grabbing; }

    .float-card.dragging {
        cursor: grabbing;
        box-shadow:
            0 4px 6px rgba(0,0,0,0.10),
            0 12px 24px rgba(0,0,0,0.12),
            0 28px 52px rgba(0,0,0,0.14),
            0 48px 80px rgba(0,0,0,0.08);
        scale: 1.02;
        transition: box-shadow 0.15s ease, scale 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.4);
    }

    .float-card.settling {
        animation: blobSettle 0.35s ease-out both;
        transition: box-shadow 0.2s ease;
    }

    @keyframes blobSettle {
        0%   { scale: 1; }
        40%  { scale: 1.025; }
        100% { scale: 1; }
    }


    .card-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        align-items: center;
        pointer-events: none;
    }

    .card-meta { display: flex; flex-direction: column; gap: 6px; }

    .card-title { font-size: 18px; font-weight: 500; color: #111; margin: 0; }
    .float-card.dark .card-title { color: #fff; }

    .card-desc { font-size: 16px; color: #888; margin: 0; line-height: 1.4; }
    .float-card.dark .card-desc { color: rgba(255,255,255,0.45); }

    .card-img {
        border-radius: 10px;
        overflow: hidden;
        aspect-ratio: 1;
        background: #ddd;
    }

    .float-card.dark .card-img { background: #222; }
    .card-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

    .overlay-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(12px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 32px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .overlay-card {
        background: var(--bg);
        border-radius: 20px;
        width: 100%;
        max-width: 960px;
        height: 85vh;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        position: relative;
        flex-shrink: 0;
    }

    .overlay-iframe {
        width: 100%;
        height: 100%;
        border: none;
        display: block;
    }

    .overlay-video-card {
        height: auto;
        overflow: hidden;
        background: #000;
    }

    .overlay-video-wrap {
        margin: 12px;
        border-radius: 10px;
        overflow: hidden;
        aspect-ratio: 16 / 9;
    }

    .overlay-video {
        width: 100%;
        height: 100%;
        border: none;
        display: block;
    }

    .overlay-gallery {
        overflow-y: auto;
        height: auto;
        max-height: 90vh;
        background: #fff;
    }

    .xtend-gallery {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 12px;
    }

    .xtend-gallery img {
        width: 100%;
        display: block;
        object-fit: cover;
        pointer-events: none;
    }

    .overlay-close {
        position: absolute;
        top: 14px;
        right: 14px;
        background: rgba(128,128,128,0.15);
        border: none;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        font-size: 13px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text);
        z-index: 10;
        backdrop-filter: blur(4px);
    }

    .overlay-close:hover { background: rgba(128,128,128,0.25); }

    @media (max-width: 600px) {
        .overlay-backdrop {
            padding: 16px;
            align-items: flex-start;
        }
        .overlay-card {
            height: auto;
            max-height: 85vh;
        }
        .canvas-center h1 { font-size: 2rem; }
        .float-card-anchor { width: 230px; }
    }
</style>
