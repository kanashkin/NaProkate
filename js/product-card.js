const productLogic = () => {
    const toReview = document.querySelector('.reviews-link')
    const toMain = document.querySelector('.breadcrumbs-review a')
    const mainBreadcrumbs = document.querySelector('.breadcrumbs-main')
    const mainBlock = document.querySelector('.product-main')
    const reviewBlock = document.querySelector('.product-review')

    reviewBlock.style.display = 'none'

    toReview.addEventListener('click', (e) => {
        e.preventDefault()
        mainBreadcrumbs.style.display = 'none'
        mainBlock.style.display = 'none'
        reviewBlock.style.display = ''
    })

    toMain.addEventListener('click', (e) => {
        e.preventDefault()
        mainBreadcrumbs.style.display = ''
        mainBlock.style.display = ''
        reviewBlock.style.display = 'none'
    })
}

productLogic()