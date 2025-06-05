function calcularMovimientos(fila,columna) {
    const movimientos = [[1,2],[1,-2],[2,1],[2,-1],[-1,2],[-1,-2],[-2,1],[-2,-1]];
    const movimientosValidos = [];
    
    const fila = document.getElementById("fila").value;
    const columna = document.getElementById("columna").value;

    for (const [movimientofila, movimientocolummna] of movimientos){
        const nuevafila = fila + movimientofila;
        const nuevacolumna = columna + movimientocolummna;
        if (nuevafila >= 1 && nuevafila <= 8 && nuevacolumna >= 1 && nuevacolumna <= 8){
            movimientosValidos.push([nuevafila,nuevacolumna])
        }
    }
    return movimientosValidos;
}



function mostrarMovimientosCaballo() {
	const fila = document.getElementById('fila').value;
	const columna = document.getElementById('columna').value;
	const resultado = document.getElementById('resultado');

	if (!isValidCoordinate(fila, columna)) {
		resultado.textContent = 'Coordenada inválida.';
		return;
	}

	const movimientos = calcularMovimientos(fila, columna);
	if (movimientos.length === 0) {
		resultado.textContent = 'No hay movimientos posibles.';
		return;
	}

	resultado.innerHTML = 'El caballo puede moverse a las siguientes casillas:<ul>' +
		movimientos.map(([fila, columna]) => `<li>Fila: ${fila}, Columna: ${columna}</li>`).join('') +
		'</ul>';
}
