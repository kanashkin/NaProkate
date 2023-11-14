const checkRentalPeriod = () => {
    const checkItem = document.querySelector('.rental-period')
    const selectItem = document.querySelector('.rental-period-item')
    const hideField = document.querySelector('.special-field')

    selectItem.addEventListener('click', () => {
        if (checkItem.textContent === 'Особый') {
            hideField.classList.add('active')
        } else {
            hideField.classList.remove('active')
        }
    })


}

checkRentalPeriod()