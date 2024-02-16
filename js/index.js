
function presentacion(){
    alert("Bienvenido, aqui administraremos sus gastos")
}


class Gasto {
    constructor(concepto, monto, fecha) {               // Declaramos la  clase "Gasto" para representar cada gasto
        this.concepto = concepto;
        this.monto = monto;
        this.fecha = fecha;
    }
}

let listaGastos = [];           // Inicializar un array para almacenar los gastos

  // Función para agregar un nuevo gasto
function agregarGasto() {
    let concepto = prompt("Ingrese la compra del gasto (o escriba -1 para salir):");
    if (concepto === "-1") {
      return; // Salir de la función si se ingresa "-1"
    }
    
    let monto = parseFloat(prompt("Ingrese el monto del gasto:"));
    let fecha = prompt("Ingrese la fecha del gasto:");
    let nuevoGasto = new Gasto(concepto, monto, fecha);         // Crear un nuevo objeto Gasto y agregarlo a la lista
    listaGastos.push(nuevoGasto);
    
    alert("Gasto agregado correctamente.");
}

function mostrarGastos() {                  // Función para mostrar todos los gastos
    console.log("Lista de gastos:");
    for (let i = 0; i < listaGastos.length; i++) {
    let gasto = listaGastos[i];
    console.log(`- Concepto: ${gasto.concepto}, Monto: ${gasto.monto}, Fecha: ${gasto.fecha}`);
    }
}

let continuar = true;
while (continuar) {
    agregarGasto();
    if (prompt("¿Desea agregar otro gasto? (s/n)").toLowerCase() !== "s") {
        continuar = false;
    }
}


mostrarGastos();
