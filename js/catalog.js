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

catalogCategories()