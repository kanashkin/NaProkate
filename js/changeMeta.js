const changeMeta = () => {
    let metaTag = document.querySelector('meta[name=viewport]')
    if (window.outerWidth <= 450) {
        metaTag.setAttribute('content', 'width=320')
    } else if (window.outerWidth > 450) {
        metaTag.setAttribute('content', 'width=1920')
    }
}

changeMeta()

window.addEventListener('resize', () => {
    changeMeta()
})