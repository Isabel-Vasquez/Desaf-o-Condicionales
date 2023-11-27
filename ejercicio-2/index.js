function cantidad() {
	let cantidadDeStickers = 0;

	let stickers1 = document.getElementById('stickers_1').value;
	let stickers2 = document.getElementById('stickers_2').value;
	let stickers3 = document.getElementById('stickers_3').value;

	cantidadDeStickers =
		parseInt(stickers1) + parseInt(stickers2) + parseInt(stickers3);

	let parrafo = document.getElementById('resultado');

	if (cantidadDeStickers <= 10) {
		parrafo.innerHTML = 'Llevas ' + cantidadDeStickers + '  stickers';
		console.log(cantidadDeStickers);
	} else {
		parrafo.innerHTML = 'Llevas demasiados stickers';
	}
}
