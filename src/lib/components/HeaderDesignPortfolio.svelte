<script>
    import { onMount } from 'svelte';
    import { toggleTheme } from '$lib/theme';
    let current = 'light';
    let activeIndex = 0;

    onMount(() => {
        current = document.documentElement.getAttribute('data-theme') || 'light';

        const paras = document.querySelectorAll('.hero-text p.scrollable');

        function onScroll() {
            const mid = window.innerHeight / 2;
            let closest = 0;
            let closestDist = Infinity;
            paras.forEach((p, i) => {
                const rect = p.getBoundingClientRect();
                const pMid = rect.top + rect.height / 2;
                const dist = Math.abs(pMid - mid);
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            });
            activeIndex = closest;
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    });

    function handleToggle() {
        current = toggleTheme();
    }
</script>

<section class="hero">
    <div class="hero-inner">
        <button
            class="theme-dot"
            aria-label="Toggle dark mode"
            on:click={handleToggle}
        ></button>

        <div class="hero-text">
            <h1>Hello, I'm Tim.</h1>
            <p class="subtitle">I'm a digital product designer</p>
            <p class="scrollable" class:active={activeIndex === 0}>I am currently studying Interaction Design<br />in Schwäbisch Gmünd, Germany.</p>
            <p class="scrollable" class:active={activeIndex === 1}>Spending a semester abroad in Tallinn,<br />and an Internship at Manyone helped me<br />gain valuable experience</p>
            <p class="scrollable" class:active={activeIndex === 2}>My strong interest in new technologies<br />and how design can help integrate them<br />seamlessly into meaningful user<br />experience, shapes the way I design.</p>
        </div>
    </div>
</section>

<style>
    .hero {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: calc(50vh - 6rem) 0 10vh;
    }

    .hero-inner {
        width: 70%;
        max-width: 1600px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: start;
    }

    .theme-dot {
        justify-self: end;
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: var(--text);
        border: none;
        cursor: pointer;
        padding: 0;
        margin-top: 14px;
        transition: opacity 0.2s ease;
        position: relative;
    }

    .theme-dot:hover {
        opacity: 0.6;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    h1 {
        font-size: 2.6rem;
        color: var(--text);
        margin: 0;
        line-height: 1.15;
    }

    .subtitle {
        color: var(--text);
        margin: -20px 0 20px 0;
        font-size: 22px;
    }

    p {
        color: var(--muted);
        transition: color 240ms ease;
    }

    p.active {
        color: var(--text);
    }

    @media (max-width: 600px) {
        .hero {
            padding: calc(50vh - 11rem) 0 10vh;
        }
        .hero-inner {
            width: 90%;
            grid-template-columns: 1fr;
        }
        .theme-dot {
            justify-self: start;
        }
        /* Expand touch target to 48×48px without changing the visual circle */
        .theme-dot::after {
            content: '';
            position: absolute;
            inset: -17px; /* (48 - 14) / 2 = 17px */
        }
        h1 {
            font-size: 2rem;
        }
    }
</style>
