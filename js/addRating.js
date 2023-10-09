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

addRating()