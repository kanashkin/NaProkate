const showSeo = () => {
    const trigger = document.querySelector('.seo-title')
    const seoBlock = document.querySelector('.hide-seo')

    trigger.onclick = function() {
        seoBlock.classList.toggle('active')
    }
}

showSeo()