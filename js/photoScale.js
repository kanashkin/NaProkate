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

photoScale()