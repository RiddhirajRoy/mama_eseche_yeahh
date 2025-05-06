const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const hearts = document.getElementById("hearts");
const gfPic = document.querySelector(".gf-pic");

let noClickedOnce = false;
let attempts = 0;

noBtn.addEventListener("click", () => {
  if (!noClickedOnce) {
    message.textContent = "Bhebhe dekh, Maggie khaobo 🍜";
    noClickedOnce = true;
  }
});

document.addEventListener("mousemove", (e) => {
  if (!noClickedOnce) return;

  const rect = noBtn.getBoundingClientRect();
  const distance = Math.hypot(e.clientX - rect.left, e.clientY - rect.top);
  if (distance < 100) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    attempts++;

    if (attempts > 7) {
      noBtn.style.display = "none";
      message.textContent = "No button gave up... think again? 😭";
    }
  }
});

yesBtn.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('images/gf.jpg')";
    message.innerHTML = "I am baked 😳🍰❤️";
    message.style.fontSize = "2.5rem";
    message.style.color = "white";
  
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  
    // Add floating emojis
    const emojis = ["💖", "🍰", "🥹", "😳", "💕", "🎉"];
    for (let i = 0; i < 50; i++) {
      const emoji = document.createElement("div");
      emoji.classList.add("emoji");
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.top = Math.random() * 100 + "vh";
      document.body.appendChild(emoji);
      setTimeout(() => emoji.remove(), 5000);
    }
  });

