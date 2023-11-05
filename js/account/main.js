const openLink = () => {
    const tableItems = document.querySelectorAll('.order-item')

    tableItems.forEach(item => {
        item.addEventListener('click', () => {
            // Получаем номер заказа для того чтоб подтягивать данные из админки  
            let numberItem = item.querySelector('.account__table-link-order')
            let number = numberItem.getAttribute('data-number')

            window.location.href = '/order-card.html'
        })
    })
}

openLink()
