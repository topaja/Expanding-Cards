const panels = document.querySelectorAll(".panel");

panels.forEach((panels) => {
    panels.addEventListener('click', () => {
        remoneActiveClasses()
        panels.classList.add('active')
    })
})

function remoneActiveClasses() {
    panels.forEach((panels) => {
        panels.classList.remove('active')
    })
}
