$(function() {
	$('input[name="daterange"]').daterangepicker({
		opens: 'left',
	}, function(start, end, label) {
	})
	$('input[name="datetimes"]').daterangepicker({
		timePicker: true,
		locale: {
			format: ('hh:mm A')
		}
	});
	$('.account__right-button').daterangepicker({
		singleDatePicker: true,
		opens: 'center',
	}, function(start, end, label) {
      	openedElement.textContent = start.format('YYYY-MM-DD');
    }
	)
});


function checkChangeOnDatepicker() {
	const targetElement = document.querySelector('.daterangepicker');

	if (!targetElement) {
		setTimeout(checkChangeOnDatepicker, 500)
	} else {
		const observer = new MutationObserver(function(mutationsList) {
			console.log(mutationsList);
			try {
				let lastEl = targetElement.querySelector('.end-date')
				let prevLastEl = lastEl.previousElementSibling
				prevLastEl.classList.add('prev-end')
			} catch {}

			try {
				let tableHeadItems = targetElement.querySelectorAll('thead tr th')
				let spanChild = document.createElement('span')
				tableHeadItems[2].classList.add('next')
				observer.disconnect()
				tableHeadItems[2].appendChild(spanChild)
				observer.observe(targetElement, config);
			} catch {}
		});

		const config = { childList: true, subtree: true };
		observer.observe(targetElement, config);
	}
}

checkChangeOnDatepicker()

function addActiveField() {
	const field = document.querySelector('.calendar__field')

	field.addEventListener('click', () => {
		field.classList.add('active')
	})

	window.addEventListener('click', (e) => {
		if (!e.target.classList.contains('calendar__field')) {
			field.classList.remove('active')
		}
	})
}

addActiveField()



