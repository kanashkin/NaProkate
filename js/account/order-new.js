$(function() {
	$('input.calendar__period').daterangepicker({
		opens: 'right',
	}, function(start, end, label) {
	})
});

// Удаление айтема из корзины
const removeItem = () => {
    const removeBtn = document.querySelectorAll('.basket-item-delete')
    
    removeBtn.forEach(item => {
        item.addEventListener('click', () => {
            item.closest('.new-order__item').remove()
        })
    })
}

removeItem()

const newItemField = () => {
    const trigger = document.querySelectorAll('.add-product')
}