const panel = document.querySelectorAll(".panel")
// console.log(panel)


const openPanel = (event) => {
    event.target.classList.toggle("open")
}

const showText = (event) => {
    console.log(event)
    if(event.propertyName.includes("flex")){
        event.target.classList.toggle("open-active")
    }
    
}

panel.forEach((panel) => {
    panel.addEventListener("click", openPanel)
})
panel.forEach((panel) => {
panel.addEventListener("transitionend", showText)
})