let previoustitle = document.title

window.addEventListener('blur', () => {
    previoustitle = document.title
    document.title = "Don't leave me!!  😞"
})

window.addEventListener('focus', () => {
    document.title = previoustitle
})