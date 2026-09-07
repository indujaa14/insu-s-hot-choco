const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const fortuneButton = document.querySelector("#fortune");
const message = document.querySelector("#message");
const snow = document.querySelector(".snow");

for (let index = 0; index < 28; index += 1) {
  const flake = document.createElement("span");
  flake.className = "flake";
  flake.style.setProperty("--x", `${Math.random() * 100}%`);
  flake.style.setProperty("--size", `${0.12 + Math.random() * 0.28}rem`);
  flake.style.setProperty("--duration", `${4 + Math.random() * 5}s`);
  flake.style.setProperty("--delay", `${Math.random() * -8}s`);
  flake.style.setProperty("--drift", `${-1.2 + Math.random() * 2.4}rem`);
  snow.append(flake);
}

const messages = [
  "you are someone's favourite person to sit next to.",
  "the thing you are building counts, even half finished.",
  "you are allowed to be a beginner for as long as you need.",
  "someone is going to love what you make with this.",
  "hot chocolate tastes better after a hard day. you've earned one.",
  "you ask good questions. that is the whole skill.",
];

const fortunes = [
  "a lucky interruption will lead you somewhere beautiful.",
  "your next small step will open a much bigger door.",
  "good news is already making its way toward you.",
  "a new friendship will brighten an ordinary day.",
  "you will find exactly what you need in an unexpected place.",
  "the choice you have been putting off will bring relief.",
];

function shakeAndShow(list) {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * list.length);
  message.textContent = list[pick];
}

button.addEventListener("click", () => {
  shakeAndShow(messages);
});

fortuneButton.addEventListener("click", () => {
  shakeAndShow(fortunes);
});