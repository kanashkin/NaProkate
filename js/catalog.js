// Изменение категории в каталоге
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

// Добавление в избранное
const addLikeItem = () => {
    const triggerBtn = document.querySelectorAll('.catalog__item-like')

    triggerBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
        })
    })
}

// Проверка куда нажал пользоватеь по карточке товара
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

// Выбор цвета в фильтрах
const selectColor = () => {
    const colorsItems = document.querySelectorAll('.colors-block .catalog__filters__list-item')

    colorsItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
        })
    })
}


stopHref()
addLikeItem()
catalogCategories()
selectColor()

