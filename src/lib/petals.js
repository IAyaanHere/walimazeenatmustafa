export function showerPetals(container, amount = 48) {
  const symbols = ["✦", "❧", "●", "◖"];
  container.innerHTML = "";
  for (let index = 0; index < amount; index += 1) {
    const petal = document.createElement("span");
    petal.textContent = symbols[index % symbols.length];
    petal.style.setProperty("--x", `${Math.random() * 100}%`);
    petal.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    petal.style.setProperty("--delay", `${Math.random() * 0.8}s`);
    petal.style.setProperty("--duration", `${2.3 + Math.random() * 2.2}s`);
    petal.style.setProperty("--size", `${8 + Math.random() * 12}px`);
    petal.style.setProperty("--spin", `${Math.random() * 720 - 360}deg`);
    container.append(petal);
  }
  window.setTimeout(() => { container.innerHTML = ""; }, 5500);
}
