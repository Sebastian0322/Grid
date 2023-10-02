
const inputs = document.querySelectorAll(".inputs");

inputs.forEach(function(input) {
    input.addEventListener('change', function() {
        almacenarLocalStorage();
    });
});

function almacenarLocalStorage(){

    const PrecioCompraDolar = parseFloat(document.getElementById("PrecioCompraDolar").value).toLocaleString();
    const PrecioVentaDolar = parseFloat(document.getElementById("PrecioVentaDolar").value).toLocaleString();
    const PrecioCompraEuro = parseFloat(document.getElementById("PrecioCompraEuro").value).toLocaleString();
    const PrecioVentaEuro = parseFloat(document.getElementById("PrecioVentaEuro").value).toLocaleString();
    const PrecioCompraReinoUnido = parseFloat(document.getElementById("PrecioCompraReinoUnido").value).toLocaleString();
    const PrecioVentaReinoUnido = parseFloat(document.getElementById("PrecioVentaReinoUnido").value).toLocaleString();
    const PrecioCompraDolarCanadiense = parseFloat(document.getElementById("PrecioCompraDolarCanadiense").value).toLocaleString();
    const PrecioVentaDolarCanadiense = parseFloat(document.getElementById("PrecioVentaDolarCanadiense").value).toLocaleString();

    const array = 
    {
        PrecioCompraDolar,
        PrecioVentaDolar,
        PrecioCompraEuro,
        PrecioVentaEuro,
        PrecioCompraReinoUnido,
        PrecioVentaReinoUnido,
        PrecioCompraDolarCanadiense,
        PrecioVentaDolarCanadiense
    }
       
    localStorage.setItem('EuroServicios', JSON.stringify(array))
}






