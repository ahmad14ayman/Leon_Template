let list = document.querySelector(".icon");
let listUl = document.querySelector(".listUl")
list.addEventListener("click", () => {
    list.classList.toggle("burger-icon-x");
    listUl.classList.toggle("opacity-1");
});