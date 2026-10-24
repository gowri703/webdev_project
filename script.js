// ---------- Dark mode button ----------
const btn = document.getElementById("theme-btn");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// On page load: restore the saved choice (works across both pages)
applyTheme(localStorage.getItem("darkMode") === "true");

btn.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
  applyTheme(isDark);
});

// ---------- Article page: show the post picked on the home page ----------
const articles = document.querySelectorAll("main.post article");
if (articles.length) {
  const wanted = new URLSearchParams(location.search).get("post") || "matcha";
  articles.forEach((a) => (a.hidden = a.id !== wanted));
  const shown = document.getElementById(wanted);
  if (shown) document.title = "Slow Sundays | " + shown.querySelector("h1").textContent;
}
