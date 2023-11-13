function checkChangeOnDatepicker() {
	const targetElement = document.querySelector('.daterangepicker');

	if (!targetElement) {
		setTimeout(checkChangeOnDatepicker, 500)
	} else {
		const observer = new MutationObserver(function(mutationsList) {
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
			try {
				if (window.location.pathname == '/account/rental-branch.html') {
					let targetElements = document.querySelectorAll('.daterangepicker')
					targetElements.forEach(item => {
						let targetIndex = Array.from(targetElements).indexOf(item)

						item.querySelectorAll('.calendar-table').forEach(item => {
							item.style.display = 'none'
						})
					})
				}
			} catch {}
		});

		const config = { childList: true, subtree: true };

		document.querySelectorAll('.daterangepicker').forEach(item => {
			observer.observe(item, config);
		})
	}
}

checkChangeOnDatepicker()