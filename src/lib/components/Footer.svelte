<script>
</script>

<footer>
    <div id="wrapper">
        <p>© 2026 Tim Bluthardt</p>
        <p><a href="/imprint">Imprint</a></p>
    </div>
</footer>

<style>
    footer {
        width: 100%;
    }
    #wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        margin: 18px 64px;
        gap: 2rem;
    }
    p {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
        color: var(--muted);
    }
    a {
        display: inline-block;
        padding: 4px 0;
        color: var(--muted);
        text-underline-offset: 0.16em;
    }
    a:hover {
        color: var(--text);
    }
    @media (max-width: 800px) {
        #wrapper {
            justify-content: space-between;
            margin: 16px 20px;
            gap: 0.75rem 1.5rem;
        }
    }
    @media (max-width: 480px) {
        #wrapper {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.4rem;
            margin: 20px 20px 96px;
        }
        p {
            font-size: 13px;
        }
    }
</style>
