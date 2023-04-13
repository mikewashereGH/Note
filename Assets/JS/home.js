const navEl = document.getElementById("nav-mobile-menu");
const nav = document.getElementsByTagName("nav");

navEl.addEventListener("click", () => {
    nav[1].classList.toggle("active");
});

const items = [
    "Organize your thoughts with effortless ease.",
    "Write it down, remember it forever.",
    "The perfect place for your notes.",
    "Notes made simple.",
    "Capture thoughts, never miss a beat.",
    "Your thoughts, organized and at ease."
]
const item = items[Math.floor(Math.random() * items.length)];
document.getElementById("QouteMottoThingy").innerHTML = item;