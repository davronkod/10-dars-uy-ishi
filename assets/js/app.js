const menuEl = document.querySelector(".bi-list");
const sidebarEl = document.querySelector(".sidebar");
const x = document.querySelector(".bi-x-lg");
menuEl.addEventListener("click", () => {
    sidebarEl.style.marginLeft = "0"
})
x.addEventListener("click", () => {
    sidebarEl.style.marginLeft = "-50%"
})