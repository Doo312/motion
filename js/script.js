let btn = document.querySelector(".header-btn")
btn.addEventListener("click", () => {
    document.querySelector(".header-square").style.display = "block"
})


let closeBtn = document.querySelector(".header-close-btn")
closeBtn.addEventListener("click", () => {
    document.querySelector(".header-square").style.display = "none"
})