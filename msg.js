

function revealMessage() {
    alert('Always remember that you are enough just the way you are.')
}
window.onload = function() {
    var music = document.getElementById('bgMusic');
    music.play();
    startConfetti();
};

function toggleMusic() {
    var music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function startConfetti() {
    const confettiCanvas = document.createElement('canvas');
    confettiCanvas.classList.add('confetti');
    document.body.appendChild(confettiCanvas);
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    let particles = [];

    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 5 + 2,
            d: Math.random() * 10,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`
        });
    }

    function draw() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
    }

    function update() {
        particles.forEach(p => {
            p.y += p.d / 2;
            if (p.y > confettiCanvas.height) p.y = 0;
        });
        draw();
        requestAnimationFrame(update);
    }

    update();
}

window.onload = function() {
    startConfetti();
};