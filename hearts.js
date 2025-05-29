
const colors = ["#ff99cc", "#ff66b2", "#ff3399", "#cc0066", "#800040"];
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);
