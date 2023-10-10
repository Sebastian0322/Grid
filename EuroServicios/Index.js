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
        PrecioCompraBolivar: '',
        PrecioVentaBolivar: '',
        PrecioCompraPesoMexicano: '',
        PrecioVentaPesoMexicano: '',
        PrecioCompraRealBrasil: '',
        PrecioVentaRealBrasil: '',
        PrecioCompraFrancoSuizo: '',
        PrecioVentaFrancoSuizo: '',
        PrecioCompraDolarNeolandez: '',
        PrecioVentaDolarNeolandez: '',
        PrecioCompraPesoBoliviano: '',
        PrecioVentaPesoBoliviano: '',
        FechaActual: ''
    }


    $scope.folder1 = false;
    $scope.folder3 = false;
    $scope.icono = "Img/pausa.png"

    $scope.diaAnterior = {};

    $scope.AlmacenarLocalStorage = function(){

        $scope.data = {
            PrecioCompraDolar: $scope.data.PrecioCompraDolar == "" ? "" : parseFloat($scope.data.PrecioCompraDolar.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioVentaDolar: $scope.data.PrecioVentaDolar == "" ? "" : parseFloat($scope.data.PrecioVentaDolar.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioCompraEuro: $scope.data.PrecioCompraEuro == "" ? "" : parseFloat($scope.data.PrecioCompraEuro.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioVentaEuro: $scope.data.PrecioVentaEuro == "" ? "" : parseFloat($scope.data.PrecioVentaEuro.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioCompraReinoUnido: $scope.data.PrecioCompraReinoUnido == "" ? "" : parseFloat($scope.data.PrecioCompraReinoUnido.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioVentaReinoUnido: $scope.data.PrecioVentaReinoUnido == "" ? "" : parseFloat($scope.data.PrecioVentaReinoUnido.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioCompraDolarCanadiense: $scope.data.PrecioCompraDolarCanadiense == "" ? "" : parseFloat($scope.data.PrecioCompraDolarCanadiense.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioVentaDolarCanadiense: $scope.data.PrecioVentaDolarCanadiense == "" ? "" : parseFloat($scope.data.PrecioVentaDolarCanadiense.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioCompraBolivar: $scope.data.PrecioCompraBolivar == "" ? "" : parseFloat($scope.data.PrecioCompraBolivar.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioVentaBolivar: $scope.data.PrecioVentaBolivar == "" ? "" : parseFloat($scope.data.PrecioVentaBolivar.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioCompraPesoMexicano: $scope.data.PrecioCompraPesoMexicano == "" ? "" : parseFloat($scope.data.PrecioCompraPesoMexicano.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioVentaPesoMexicano: $scope.data.PrecioVentaPesoMexicano == "" ? "" : parseFloat($scope.data.PrecioVentaPesoMexicano.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioCompraRealBrasil: $scope.data.PrecioCompraRealBrasil == "" ? "" : parseFloat($scope.data.PrecioCompraRealBrasil.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioVentaRealBrasil: $scope.data.PrecioVentaRealBrasil == "" ? "" : parseFloat($scope.data.PrecioVentaRealBrasil.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioCompraFrancoSuizo: $scope.data.PrecioCompraFrancoSuizo == "" ? "" : parseFloat($scope.data.PrecioCompraFrancoSuizo.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioVentaFrancoSuizo: $scope.data.PrecioVentaFrancoSuizo == "" ? "" : parseFloat($scope.data.PrecioVentaFrancoSuizo.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioCompraDolarNeolandez: $scope.data.PrecioCompraDolarNeolandez == "" ? "" : parseFloat($scope.data.PrecioCompraDolarNeolandez.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioVentaDolarNeolandez: $scope.data.PrecioVentaDolarNeolandez == "" ? "" : parseFloat($scope.data.PrecioVentaDolarNeolandez.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioCompraPesoBoliviano: $scope.data.PrecioCompraPesoBoliviano == "" ? "" : parseFloat($scope.data.PrecioCompraPesoBoliviano.replaceAll('.','')).toLocaleString("de-DE"),
            PrecioVentaPesoBoliviano: $scope.data.PrecioVentaPesoBoliviano == "" ? "" : parseFloat($scope.data.PrecioVentaPesoBoliviano.replaceAll('.','')).toLocaleString("de-DE"),
            FechaActual: new Date()
        }
 
        localStorage.setItem('EuroServicios', JSON.stringify($scope.data));
    }

    $scope.storedLocalStorageActual = localStorage.getItem('EuroServicios');

    
    if ($scope.storedLocalStorageActual) {
        
        $scope.data = JSON.parse($scope.storedLocalStorageActual);

        $scope.data.PrecioCompraDolar;
        $scope.data.PrecioVentaDolar;
        $scope.data.PrecioCompraEuro;
        $scope.data.PrecioVentaEuro;
        $scope.data.PrecioCompraReinoUnido;
        $scope.data.PrecioVentaReinoUnido;
        $scope.data.PrecioCompraDolarCanadiense;
        $scope.data.PrecioVentaDolarCanadiense;
        $scope.data.PrecioCompraBolivar;
        $scope.data.PrecioVentaBolivar;
        $scope.data.PrecioCompraPesoMexicano;
        $scope.data.PrecioVentaPesoMexicano;
        $scope.data.PrecioCompraRealBrasil;
        $scope.data.PrecioVentaRealBrasil;
        $scope.data.PrecioCompraFrancoSuizo;
        $scope.data.PrecioVentaFrancoSuizo;
        $scope.data.PrecioCompraDolarNeolandez;
        $scope.data.PrecioVentaDolarNeolandez;
        $scope.data.PrecioCompraPesoBoliviano;
        $scope.data.PrecioVentaPesoBoliviano;
    }
    else{
        $scope.data;
    }


    $scope.Pausar = function(){
       
        $scope.folder1 = !$scope.folder1;
        $scope.folder3 = !$scope.folder3;
        $scope.icono = $scope.folder1 || $scope.folder3 == true ? "Img/continuar.png" : "Img/pausa.png"; 
    }
   

    

})


    
    
    
    
    






