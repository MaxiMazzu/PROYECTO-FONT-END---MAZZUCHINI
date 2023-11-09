
const valorTicket = 200;
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;


let cantidadTickets = document.getElementById("cantidad");
let categoria       = document.getElementById("categoria");



function total_a_pagar() {

    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }

    total.innerHTML = totalValorTickets;
}

resumen.addEventListener('click', total_a_pagar);

function reset_total_a_pagar() {
    total.innerHTML = "";
}

borrar.addEventListener('click', reset_total_a_pagar);