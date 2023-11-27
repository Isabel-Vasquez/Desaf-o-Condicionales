function ingresarPassword() {
	let password1 = document.getElementById('select-password_1').value;
	let password2 = document.getElementById('select-password_2').value;
	let password3 = document.getElementById('select-password_3').value;

	let parrafo = document.getElementById('resultado');

	if (password1 == 9 && password2 == 1 && password3 == 1) {
		parrafo.innerHTML = 'Password 1 Correcta';
	} else if (password1 == 7 && password2 == 1 && password3 == 4) {
		parrafo.innerHTML = 'Password 2 Correcta';
	} else {
		parrafo.innerHTML = 'Password Incorrecta';
	}
}
