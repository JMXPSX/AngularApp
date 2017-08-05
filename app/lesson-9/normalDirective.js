angular.module('myApp')

.directive('dateTimer', ['$interval', '$filter', function($interval, $filter){
    
    return {
        restrict: 'E',
        scope : false,
        link : function(scope, element) {
            $interval(function(){
                element.text($filter('date')(new Date(), 'dd.MM.yyyy HH:mm:ss'));
            }, 1000)
        }
    }
}]);