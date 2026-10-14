const FPS = 25;

function pad(n) {
    return String(n).padStart(2, "0");
}

export function initTimecode(el) {
    const start = performance.now();

    const tick = (now) => {
        if (!el.isConnected) {
            return;
        }

        const frames = Math.floor(((now - start) / 1000) * FPS);
        const f = frames % FPS;
        const s = Math.floor(frames / FPS) % 60;
        const m = Math.floor(frames / (FPS * 60)) % 60;
        const h = Math.floor(frames / (FPS * 3600));
        el.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
        requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
}
