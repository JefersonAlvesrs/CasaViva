document.querySelector(".menu")?.addEventListener("click", () => {
  const el = document.querySelector(".links");
  el.classList.toggle("open");
  document
    .querySelector(".menu")
    .setAttribute("aria-expanded", el.classList.contains("open"));
});
document.querySelectorAll("[data-filter]").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filter]")
      .forEach((x) => x.classList.remove("selected"));
    btn.classList.add("selected");
    apply();
  }),
);
document.querySelector("#search")?.addEventListener("input", apply);
function apply() {
  let category =
      document.querySelector(".filter.selected")?.dataset.filter || "todos",
    query = (document.querySelector("#search")?.value || "").toLowerCase();
  document.querySelectorAll("[data-category]").forEach((c) => {
    c.hidden =
      !(category === "todos" || c.dataset.category === category) ||
      !c.textContent.toLowerCase().includes(query);
  });
}
document.querySelector("#contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#feedback").textContent =
    "Mensagem de demonstração validada! Nenhum dado foi enviado.";
  e.target.reset();
});
