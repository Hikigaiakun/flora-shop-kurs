window.addEventListener('scroll', function () {
	var scroll = document.querySelector('.btn-upper')
	scroll.classList.toggle('active', window.scrollY > 500)
})

document.querySelector('.btn-upper').addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})
