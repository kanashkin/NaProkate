// Логика перехода к отзывам и обратно
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

// Выбор фото в карточке товара
const photoScale = () => {
    const photoItems = document.querySelectorAll('.product__photo-item')
    const mainItemBlock = document.querySelector('.product__photo')

    photoItems[0].classList.add('active')
    let photo = photoItems[0].querySelector('img')
    let photoClone = photo.cloneNode()
    mainItemBlock.appendChild(photoClone)

    photoItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('active') == false) {
                photoItems.forEach(item => {
                    item.classList.remove('active')
                })
                item.classList.add('active')
                let photo = item.querySelector('img')
                let prevPhoto = mainItemBlock.querySelector('img')
                if (photo) {
                    if (prevPhoto) {
                        prevPhoto.remove()
                    }
                    let photoClone = photo.cloneNode()
                    mainItemBlock.appendChild(photoClone)
                } else {
                    prevPhoto.remove()
                }
            }
        })
    })
}

// Выбор кол-ва звезд в отзыве
const addRating = () => {
    const stars = document.querySelectorAll('.review__rating-star')

    stars.forEach(item => {
        item.addEventListener('click', () => {
            stars.forEach(item => {
                item.classList.remove('active')
            })

            let itemIndex = Array.from(stars).indexOf(item)
            item.classList.add('active')

            for (let i = itemIndex; i >= 0; i--) {
                stars[i].classList.add('active');
            }
        })
    })
}

const openCalendar = () => {
    const triggerField = document.querySelector('.calendar__field')
    const calendarBtns = document.querySelectorAll('.calendar__footer button')

    const productCalendar = document.querySelector('.product-calendar')

    triggerField.addEventListener('click', () => {
        triggerField.classList.toggle('active')
        productCalendar.classList.toggle('active')
    })

    calendarBtns.forEach(item => {
        item.addEventListener('click', () => {
            triggerField.classList.remove('active')
            productCalendar.classList.remove('active')
        })
    })
}

openCalendar()

productLogic()
photoScale()
addRating()