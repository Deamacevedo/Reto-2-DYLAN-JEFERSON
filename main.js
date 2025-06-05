function calcularMovimientos(fila,columna) {
    const movimientos = [[1,2],[1,-2],[2,1],[2,-1],[-1,2],[-1,-2],[-2,1],[-2,-1]];
    const movimientosValidos = []
    
    const fila = document.getElementById("fila");
    const columna = document.getElementById("columna");

    for (const [movimientofila, movimientocolummna] of movimientos){
        const nuevafila = fila + movimientofila;
        const nuevacolumna = columna + movimientocolummna;
        if (nuevafila >= 1 && nuevafila <= 8 && nuevacolumna >= 1 && nuevacolumna <= 8){
            movimientosValidos.push([nuevafila,nuevacolumna])
        }
    }

    

}