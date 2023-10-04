var app = angular.module('App', [])
app.controller('InitEncabezado', function($scope){

    $scope.data = {
        PrecioCompraDolar: '',
        PrecioVentaDolar: '',
        PrecioCompraEuro: '',
        PrecioVentaEuro: '',
        PrecioCompraReinoUnido: '',
        PrecioVentaReinoUnido: '',
        PrecioCompraDolarCanadiense: '',
        PrecioVentaDolarCanadiense: '',
    }



    $scope.AlmacenarLocalStorage = function(){

        $scope.info = [
            $scope.data.PrecioCompraDolar = $scope.data.PrecioCompraDolar == "" ? "" : parseFloat($scope.data.PrecioCompraDolar.replaceAll('.','')).toLocaleString("de-DE"),
            $scope.data.PrecioVentaDolar = $scope.data.PrecioVentaDolar == "" ? "" : parseFloat($scope.data.PrecioVentaDolar.replaceAll('.','')).toLocaleString("de-DE"),
            $scope.data.PrecioCompraEuro = $scope.data.PrecioCompraEuro == "" ? "" : parseFloat($scope.data.PrecioCompraEuro.replaceAll('.','')).toLocaleString("de-DE"),
            $scope.data.PrecioVentaEuro = $scope.data.PrecioVentaEuro == "" ? "" : parseFloat($scope.data.PrecioVentaEuro.replaceAll('.','')).toLocaleString("de-DE"),
            $scope.data.PrecioCompraReinoUnido = $scope.data.PrecioCompraReinoUnido == "" ? "" : parseFloat($scope.data.PrecioCompraReinoUnido.replaceAll('.','')).toLocaleString("de-DE"),
            $scope.data.PrecioVentaReinoUnido = $scope.data.PrecioVentaReinoUnido == "" ? "" : parseFloat($scope.data.PrecioVentaReinoUnido.replaceAll('.','')).toLocaleString("de-DE"),
            $scope.data.PrecioCompraDolarCanadiense = $scope.data.PrecioCompraDolarCanadiense == "" ? "" : parseFloat($scope.data.PrecioCompraDolarCanadiense.replaceAll('.','')).toLocaleString("de-DE"),
            $scope.data.PrecioVentaDolarCanadiense = $scope.data.PrecioVentaDolarCanadiense == "" ? "" : parseFloat($scope.data.PrecioVentaDolarCanadiense.replaceAll('.','')).toLocaleString("de-DE")
        ];
            
       localStorage.setItem('EuroServicios', JSON.stringify($scope.info));
    }

    $scope.storedLocalStorage = localStorage.getItem('EuroServicios');

    if ($scope.storedLocalStorage) {
        
        $scope.info = JSON.parse($scope.storedLocalStorage);

        $scope.data = {
        PrecioCompraDolar: $scope.info[0],
        PrecioVentaDolar: $scope.info[1],
        PrecioCompraEuro: $scope.info[2],
        PrecioVentaEuro: $scope.info[3],
        PrecioCompraReinoUnido: $scope.info[4],
        PrecioVentaReinoUnido: $scope.info[5],
        PrecioCompraDolarCanadiense: $scope.info[6],
        PrecioVentaDolarCanadiense: $scope.info[7],
        }
    }
    else{
        $scope.data;
    }
    

    setInterval(function() {
        document.querySelector('.contenedor').classList.toggle("esconder");

        document.querySelector('.contenedor-transicion').classList.toggle("esconder");

      }, 8000); 
      


})
    
    
    
    
    






