const catalogCategories = () => {
    const catalogTitle = document.querySelector('.catalog-title')
    const categoriesItems = document.querySelectorAll('.category__list-item')

    categoriesItems.forEach(item => {
        item.addEventListener('click', () => {
            categoriesItems.forEach(item => {
                item.classList.remove('active')
            })
            catalogTitle.textContent = item.textContent
            item.classList.add('active')
        })
    })
}

const addLikeItem = () => {
    const triggerBtn = document.querySelectorAll('.catalog__item-like')

    triggerBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
        })
    })
}

const stopHref = () => {
    const catalogItems = document.querySelectorAll('.catalog__item')

    catalogItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            const itemHref = item.getAttribute('href')
            
            if (e.target.classList.contains('stop-href') || e.target.closest('.stop-href')) {
                
            } else {
                window.location.href = itemHref
            }
        })
    })
}

stopHref()

addLikeItem()

catalogCategories()