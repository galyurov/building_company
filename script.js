{
	if (window.matchMedia("(min-width: 768px)").matches) {
		const dots = document.querySelector('.feedback__rounds');

		dots.addEventListener('click', (event) => {
			let dot = event.target;
			let arr = [...dots.children]
			if (dot.classList.contains('feedback__round')) {
				dot.classList.add('active')
				arr.forEach(value => {
					if (value === dot) {
					} else {
						value.classList.remove('active')
					}
				})
			}
		})
	}

}

{
	const iconMenu = document.querySelector('.menu__icon')
	iconMenu.addEventListener('click', (event) => {
		console.log(iconMenu)
		if (!iconMenu.className.includes('clicked')) {
			iconMenu.classList.add('clicked')
		} else {
			iconMenu.classList.remove('clicked')
		}
	})
}
