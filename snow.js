// Create snow effect
const snowContainer = document.querySelector('.snow-container');

for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration between 2s and 5s
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 5 + 'px'; // Random size for snowflakes
    snowContainer.appendChild(snowflake);
}

// CSS for snowflakes
const style = document.createElement('style');
style.innerHTML = `
    .snowflake {
        position: absolute;
        top: -10px;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        animation-name: fall;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes fall {
        to {
            transform: translateY(calc(100vh + 10px)); /* Fall beyond the viewport height */
        }
    }
`;
document.head.appendChild(style);