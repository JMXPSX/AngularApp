angular.module('myApp')

.directive('isolatedDateTimer', ['$interval', '$filter', function($interval, $filter){
    
    return {
        scope : {
            dateTimer : "="
        },
        restrict : 'E',
        link : function(scope, element) {
            $interval(function(){
                scope.dateTimer = new Date();
                element.text($filter('date')(scope.dateTimer, 'dd.MM.yyyy HH:mm:ss'));
            }, 1000)
        }
    }
}]);