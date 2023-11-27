const catImg = document.getElementById('dibujo-cat');

// función
function generarBorder() {
	if (catImg.classList.contains('border')) {
		catImg.classList.remove('border');
	} else {
		catImg.classList.add('border');
	}
}
