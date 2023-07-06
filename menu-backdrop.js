import "./style.css";

const listItem = document.querySelectorAll("#landing-header ul a")
const menuBackDrop = document.querySelector("#menu-backdrop")
        
        listItem.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                const { left, top, width, height } = item.getBoundingClientRect()
        
                menuBackDrop.style.setProperty("--left", `${left}px`)
                menuBackDrop.style.setProperty("--top", `${top}px`)
                menuBackDrop.style.setProperty("--whidth", `${width}px`)
                menuBackDrop.style.setProperty("--height", `${height}px`)
                menuBackDrop.style.opacity = "1"
                menuBackDrop.style.visibility = "visible"
            })
        
            item.addEventListener("mouseleave", () => {
                menuBackDrop.style.opacity = "0"
                menuBackDrop.style.visibility = "hidden"
            })
        }) 