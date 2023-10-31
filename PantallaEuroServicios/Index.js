var app = angular.module('App', [])
app.controller('InitEncabezado', function($scope){

    $scope.data = {
        PrecioCompraDolar: '',
        PrecioVentaDolar: '',
        PrecioCompraEuroMenudo: '',
        PrecioVentaEuroMenudo: '',
        PrecioCompraEuro200: '',
        PrecioVentaEuro200: '',
        PrecioCompraPesoMexicano: '',
        PrecioVentaPesoMexicano: '',

        PrecioCompraDolarCanadiense: '',
        PrecioVentaDolarCanadiense: '',
        PrecioCompraLibraEsterlina: '',
        PrecioVentaLibraEsterlina: '',
        PrecioCompraDolarAustraliano: '',
        PrecioVentaDolarAustraliano: '',
        PrecioCompraRealBrasil: '',
        PrecioVentaRealBrasil: '',
        PrecioCompraFrancoSuizo: '',
        PrecioVentaFrancoSuizo: '',
        PrecioCompraPesoChileno: '',
        PrecioVentaPesoChileno: '',

        PrecioCompraNuevoSol: '',
        PrecioVentaNuevoSol: '',
        PrecioCompraPesoArgentino: '',
        PrecioVentaPesoArgentino: '',
        PrecioCompraQuetzalGuatemala: '',
        PrecioVentaQuetzalGuatemala: '',
        PrecioCompraYenJapones: '',
        PrecioVentaYenJapones: '',
        PrecioCompraPesoDominicano: '',
        PrecioVentaPesoDominicano: '',
        PrecioCompraYuanChino: '',
        PrecioVentaYuanChino: '',

        PrecioCompraFlorinAruba: '',
        PrecioVentaFlorinAruba: '',
        PrecioCompraFlorinAntillas: '',
        PrecioVentaFlorinAntillas: '',
        PrecioCompraNuevaZelanda: '',
        PrecioVentaNuevaZelanda: '',
        PrecioCompraPesoBoliviano: '',
        PrecioVentaPesoBoliviano: '',
        PrecioCompraLibraTurca: '',
        PrecioVentaLibraTurca: '',
        PrecioCompraBathTailandia: '',
        PrecioVentaBathTailandia: '',

        PrecioCompraColones: '',
        PrecioVentaColones: '',
        PrecioCompraWonCorea: '',
        PrecioVentaWonCorea: '',
        PrecioCompraPesoUruguayo: '',
        PrecioVentaPesoUruguayo: '',
        PrecioCompraDirham: '',
        PrecioVentaDirham: '',
        PrecioCompraDolarHonKong: '',
        PrecioVentaDolarHonKong: '',
        PrecioCompraLempira: '',
        PrecioVentaLempira: '',
 
        FechaActual: '',
        ValorTRMDolar: '',
        ValorTRMEuro: ''
    }

    moment.locale('es');
    $scope.FechaActual = moment().format('dddd DD/MM/YYYY').toUpperCase();
    
    $scope.Principal = false;
    $scope.Secundario = false;
    $scope.Terciario = false;
    $scope.icono = "Img/pausa.png"

    

    $scope.AlmacenarLocalStorage = function(){

        $scope.data = {
                                                                                                        
            PrecioCompraDolar: $scope.data.PrecioCompraDolar == "" ? "" : $scope.data.PrecioCompraDolar.replace(/[a-zA-Z]+/g, '').replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaDolar: $scope.data.PrecioVentaDolar == "" ? "" : $scope.data.PrecioVentaDolar.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraEuroMenudo: $scope.data.PrecioCompraEuroMenudo == "" ? "" : $scope.data.PrecioCompraEuroMenudo.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaEuroMenudo: $scope.data.PrecioVentaEuroMenudo == "" ? "" : $scope.data.PrecioVentaEuroMenudo.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraEuro200: $scope.data.PrecioCompraEuro200 == "" ? "" : $scope.data.PrecioCompraEuro200.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaEuro200: $scope.data.PrecioVentaEuro200 == "" ? "" : $scope.data.PrecioVentaEuro200.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraPesoMexicano: $scope.data.PrecioCompraPesoMexicano == "" ? "" : $scope.data.PrecioCompraPesoMexicano.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaPesoMexicano: $scope.data.PrecioVentaPesoMexicano == "" ? "" : $scope.data.PrecioVentaPesoMexicano.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),

            PrecioCompraDolarCanadiense: $scope.data.PrecioCompraDolarCanadiense == "" ? "" : $scope.data.PrecioCompraDolarCanadiense.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaDolarCanadiense: $scope.data.PrecioVentaDolarCanadiense == "" ? "" : $scope.data.PrecioVentaDolarCanadiense.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraLibraEsterlina: $scope.data.PrecioCompraLibraEsterlina == "" ? "" : $scope.data.PrecioCompraLibraEsterlina.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaLibraEsterlina: $scope.data.PrecioVentaLibraEsterlina == "" ? "" : $scope.data.PrecioVentaLibraEsterlina.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraDolarAustraliano: $scope.data.PrecioCompraDolarAustraliano == "" ? "" : $scope.data.PrecioCompraDolarAustraliano.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaDolarAustraliano: $scope.data.PrecioVentaDolarAustraliano == "" ? "" : $scope.data.PrecioVentaDolarAustraliano.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraRealBrasil: $scope.data.PrecioCompraRealBrasil == "" ? "" : $scope.data.PrecioCompraRealBrasil.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaRealBrasil: $scope.data.PrecioVentaRealBrasil == "" ? "" : $scope.data.PrecioVentaRealBrasil.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraFrancoSuizo: $scope.data.PrecioCompraFrancoSuizo == "" ? "" : $scope.data.PrecioCompraFrancoSuizo.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaFrancoSuizo: $scope.data.PrecioVentaFrancoSuizo == "" ? "" : $scope.data.PrecioVentaFrancoSuizo.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraPesoChileno: $scope.data.PrecioCompraPesoChileno == "" ? "" : $scope.data.PrecioCompraPesoChileno.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaPesoChileno: $scope.data.PrecioVentaPesoChileno == "" ? "" : $scope.data.PrecioVentaPesoChileno.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),

            PrecioCompraNuevoSol: $scope.data.PrecioCompraNuevoSol == "" ? "" : $scope.data.PrecioCompraNuevoSol.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaNuevoSol: $scope.data.PrecioVentaNuevoSol == "" ? "" : $scope.data.PrecioVentaNuevoSol.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraPesoArgentino: $scope.data.PrecioCompraPesoArgentino == "" ? "" : $scope.data.PrecioCompraPesoArgentino.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaPesoArgentino: $scope.data.PrecioVentaPesoArgentino == "" ? "" : $scope.data.PrecioVentaPesoArgentino.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraQuetzalGuatemala: $scope.data.PrecioCompraQuetzalGuatemala == "" ? "" : $scope.data.PrecioCompraQuetzalGuatemala.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaQuetzalGuatemala: $scope.data.PrecioVentaQuetzalGuatemala == "" ? "" : $scope.data.PrecioVentaQuetzalGuatemala.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraYenJapones: $scope.data.PrecioCompraYenJapones == "" ? "" : $scope.data.PrecioCompraYenJapones.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaYenJapones: $scope.data.PrecioVentaYenJapones == "" ? "" : $scope.data.PrecioVentaYenJapones.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraPesoDominicano: $scope.data.PrecioCompraPesoDominicano == "" ? "" : $scope.data.PrecioCompraPesoDominicano.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaPesoDominicano: $scope.data.PrecioVentaPesoDominicano == "" ? "" : $scope.data.PrecioVentaPesoDominicano.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraYuanChino: $scope.data.PrecioCompraYuanChino == "" ? "" : $scope.data.PrecioCompraYuanChino.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaYuanChino: $scope.data.PrecioVentaYuanChino == "" ? "" : $scope.data.PrecioVentaYuanChino.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),

            PrecioCompraFlorinAruba: $scope.data.PrecioCompraFlorinAruba == "" ? "" : $scope.data.PrecioCompraFlorinAruba.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaFlorinAruba: $scope.data.PrecioVentaFlorinAruba == "" ? "" : $scope.data.PrecioVentaFlorinAruba.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraFlorinAntillas: $scope.data.PrecioCompraFlorinAntillas == "" ? "" : $scope.data.PrecioCompraFlorinAntillas.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaFlorinAntillas: $scope.data.PrecioVentaFlorinAntillas == "" ? "" : $scope.data.PrecioVentaFlorinAntillas.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraNuevaZelanda: $scope.data.PrecioCompraNuevaZelanda == "" ? "" : $scope.data.PrecioCompraNuevaZelanda.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaNuevaZelanda: $scope.data.PrecioVentaNuevaZelanda == "" ? "" : $scope.data.PrecioVentaNuevaZelanda.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraPesoBoliviano: $scope.data.PrecioCompraPesoBoliviano == "" ? "" : $scope.data.PrecioCompraPesoBoliviano.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaPesoBoliviano: $scope.data.PrecioVentaPesoBoliviano == "" ? "" : $scope.data.PrecioVentaPesoBoliviano.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraLibraTurca: $scope.data.PrecioCompraLibraTurca == "" ? "" : $scope.data.PrecioCompraLibraTurca.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaLibraTurca: $scope.data.PrecioVentaLibraTurca == "" ? "" : $scope.data.PrecioVentaLibraTurca.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraBathTailandia: $scope.data.PrecioCompraBathTailandia == "" ? "" : $scope.data.PrecioCompraBathTailandia.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaBathTailandia: $scope.data.PrecioVentaBathTailandia == "" ? "" : $scope.data.PrecioVentaBathTailandia.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),

            PrecioCompraColones: $scope.data.PrecioCompraColones == "" ? "" : $scope.data.PrecioCompraColones.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaColones: $scope.data.PrecioVentaColones == "" ? "" : $scope.data.PrecioVentaColones.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraWonCorea: $scope.data.PrecioCompraWonCorea == "" ? "" : $scope.data.PrecioCompraWonCorea.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaWonCorea: $scope.data.PrecioVentaWonCorea == "" ? "" : $scope.data.PrecioVentaWonCorea.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraPesoUruguayo: $scope.data.PrecioCompraPesoUruguayo == "" ? "" : $scope.data.PrecioCompraPesoUruguayo.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaPesoUruguayo: $scope.data.PrecioVentaPesoUruguayo == "" ? "" : $scope.data.PrecioVentaPesoUruguayo.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraDirham: $scope.data.PrecioCompraDirham == "" ? "" : $scope.data.PrecioCompraDirham.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaDirham: $scope.data.PrecioVentaDirham == "" ? "" : $scope.data.PrecioVentaDirham.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraDolarHonKong: $scope.data.PrecioCompraDolarHonKong == "" ? "" : $scope.data.PrecioCompraDolarHonKong.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaDolarHonKong: $scope.data.PrecioVentaDolarHonKong == "" ? "" : $scope.data.PrecioVentaDolarHonKong.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioCompraLempira: $scope.data.PrecioCompraLempira == "" ? "" : $scope.data.PrecioCompraLempira.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            PrecioVentaLempira: $scope.data.PrecioVentaLempira == "" ? "" : $scope.data.PrecioVentaLempira.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),

            ValorTRMDolar: $scope.data.ValorTRMDolar == "" ? "" : $scope.data.ValorTRMDolar.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            ValorTRMEuro: $scope.data.ValorTRMEuro == "" ? "" : $scope.data.ValorTRMEuro.replace(/[a-zA-Z]+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        }
 
        localStorage.setItem('EuroServicios', JSON.stringify($scope.data));
    }

    $scope.storedLocalStorageActual = localStorage.getItem('EuroServicios');

    
    if ($scope.storedLocalStorageActual) {
        
        $scope.data = JSON.parse($scope.storedLocalStorageActual);

       $scope.data.PrecioCompraDolar;
       $scope.data.PrecioVentaDolar;
       $scope.data.PrecioCompraEuroMenudo;
       $scope.data.PrecioVentaEuroMenudo;
       $scope.data.PrecioCompraEuro200;
       $scope.data.PrecioVentaEuro200;
       $scope.data.PrecioCompraPesoMexicano;
       $scope.data.PrecioVentaPesoMexicano;

       $scope.data.PrecioCompraDolarCanadiense;
       $scope.data.PrecioVentaDolarCanadiense;
       $scope.data.PrecioCompraLibraEsterlina;
       $scope.data.PrecioVentaLibraEsterlina;
       $scope.data.PrecioCompraDolarAustraliano;
       $scope.data.PrecioVentaDolarAustraliano;
       $scope.data.PrecioCompraRealBrasil;
       $scope.data.PrecioVentaRealBrasil;
       $scope.data.PrecioCompraFrancoSuizo;
       $scope.data.PrecioVentaFrancoSuizo;
       $scope.data.PrecioCompraPesoChileno;
       $scope.data.PrecioVentaPesoChileno;

       $scope.data.PrecioCompraNuevoSol;
       $scope.data.PrecioVentaNuevoSol;
       $scope.data.PrecioCompraPesoArgentino;
       $scope.data.PrecioVentaPesoArgentino;
       $scope.data.PrecioCompraQuetzalGuatemala;
       $scope.data.PrecioVentaQuetzalGuatemala;
       $scope.data.PrecioCompraYenJapones;
       $scope.data.PrecioVentaYenJapones;
       $scope.data.PrecioCompraPesoDominicano;
       $scope.data.PrecioVentaPesoDominicano;
       $scope.data.PrecioCompraYuanChino;
       $scope.data.PrecioVentaYuanChino;

       $scope.data.PrecioCompraFlorinAruba;
       $scope.data.PrecioVentaFlorinAruba;
       $scope.data.PrecioCompraFlorinAntillas;
       $scope.data.PrecioVentaFlorinAntillas;
       $scope.data.PrecioCompraNuevaZelanda;
       $scope.data.PrecioVentaNuevaZelanda;
       $scope.data.PrecioCompraPesoBoliviano;
       $scope.data.PrecioVentaPesoBoliviano;
       $scope.data.PrecioCompraLibraTurca;
       $scope.data.PrecioVentaLibraTurca;
       $scope.data.PrecioCompraBathTailandia;
       $scope.data.PrecioVentaBathTailandia;

       $scope.data.PrecioCompraColones;
       $scope.data.PrecioVentaColones;
       $scope.data.PrecioCompraWonCorea;
       $scope.data.PrecioVentaWonCorea;
       $scope.data.PrecioCompraPesoUruguayo;
       $scope.data.PrecioVentaPesoUruguayo;
       $scope.data.PrecioCompraDirham;
       $scope.data.PrecioVentaDirham;
       $scope.data.PrecioCompraDolarHonKong;
       $scope.data.PrecioVentaDolarHonKong;
       $scope.data.PrecioCompraLempira;
       $scope.data.PrecioVentaLempira;

       $scope.data.ValorTRM;

    }
    else{
        $scope.data;
    }

    $scope.Pausar = function(){
        $scope.Principal = !$scope.Principal;
        $scope.Secundario = !$scope.Secundario;
        $scope.Terciario = !$scope.Terciario;

        if( $scope.Principal == true || $scope.Secundario == true ||  $scope.Terciario == true ){
            $scope.icono = "Img/continuar.png"; 
        }
        else{
            $scope.icono = "Img/pausa.png"
        }
    }
   
})


    
    
    

