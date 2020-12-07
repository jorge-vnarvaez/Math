/*
Se ejectura al iniciar la ventana, la función
es llamada firstFunction porque escribe
una función cuando es iniciada la página así
se está seguro de que la persona una vez
que abra la página podrá comenzar a ejercitar.
*/
window.onload = function firstFunction(){
	writeFunction();
}

/*
Esta función como lo dice su nombre escribe 
una nueva función cuadratica en la pantalla
en primer lugar oculta las soluciones y luego
escribe una nueva para que sea resuelta.
*/
function writeFunction() {

	let signos = [String.fromCharCode(43), String.fromCharCode(45)];


	ocultarSoluciones();

	let a = Math.round(Math.random() * 10);
	let b = Math.round(Math.random() * 10);
	let c = Math.round(Math.random() * 5);

	document.getElementById('a').innerHTML = a;
	document.getElementById('b').innerHTML = b;
	document.getElementById('c').innerHTML = c;

	// Permite determinar el signo que le pertenece a A.
	// Así si es positivo lo reemplaza por un caracter vacio
	// en caso contrario coloca un "-"
	let signo_0 = signos[Math.round(Math.random() * 1)];
	signo_0 = (signo_0 == "+")?" ":"-";

	document.getElementById('signo_0').innerHTML = signo_0;
	document.getElementById('signo_1').innerHTML = signos[Math.round(Math.random() * 1)];
	document.getElementById('signo_2').innerHTML = signos[Math.round(Math.random() * 1)];
}

/*
Esta función como dice su nombre permite ver
las soluciones en caso de que el cliente lo requiera
por el momento la función contempla solo 2 soluciones
*/
function verSoluciones() {

	let sol_1 = document.getElementById('p_sol_1');
	let sol_2 = document.getElementById('p_sol_2');
	let dis = document.getElementById('dis');

	sol_1.style.display = 'block';
	sol_2.style.display = 'block';
	//dis.style.display = 'block'; Considera futuras modificaciones.

	procedimientoFuncion();
}


/*
Esta función permite ocultar las soluciones
por lo general será llamada cuando el usuario
presione el botón refrescar para pedir
una nueva función cuadratica
*/
function ocultarSoluciones() {

	let sol_1 = document.getElementById('p_sol_1');
	let sol_2 = document.getElementById('p_sol_2');

	sol_1.style.display = 'none';
	sol_2.style.display = 'none';
	//dis.style.display = 'none'; Considera futuras modificaciones.

}


function procedimientoFuncion() {

	let a = Number(document.getElementById('a').textContent);
	let b = Number(document.getElementById('b').textContent);
	let c = Number(document.getElementById('c').textContent);

	let signo_0 = document.getElementById('signo_0').textContent;
	let signo_1 = document.getElementById('signo_1').textContent;
	let signo_2 = document.getElementById('signo_2').textContent;

	let solucion_1 = 0;
	let solucion_2 = 0;

	// Los 3 if que prosiguen tienen como finalidad cambiar
	// los signos en caso de que sean negativos para
	// asi manejar el margen de error
	if (signo_0 == "-") {
		a = -1 * (a);
	}

	if (signo_1 == "-") {
		b = -1 * (b);
	}

	if (signo_2 == "-") {
		c = -1 * (c);
	}
	
	let discriminante = ((Math.pow(b,2)) - (4 * a * c));

	if (discriminante > 0) {

		solucion_1 = (-(b) + Math.sqrt(discriminante))/(2 * a);
		solucion_2 = (-(b) - Math.sqrt(discriminante))/(2 * a);

		document.getElementById('sol_1').innerHTML = solucion_1;
		document.getElementById('sol_2').innerHTML = solucion_2;
		//document.getElementById('disc').innerHTML = discriminante; Considera futuras modificaciones

	} else if (discriminante == 0) {

		solucion_1 = (-(b) + Math.sqrt(discriminante))/(2 * a);
		solucion_2 = (-(b) - Math.sqrt(discriminante))/(2 * a);

		document.getElementById('sol_1').innerHTML = solucion_1;
		document.getElementById('sol_2').innerHTML = solucion_2;
		//document.getElementById('disc').innerHTML = discriminante; Considera futuras modificaciones
		
	} else if (discriminante < 0) {

		document.getElementById('sol_1').innerHTML = "No posee soluciones reales";
		document.getElementById('sol_2').innerHTML = '';
		document.getElementById('p_sol_2').style.display = 'block';
	}

}

