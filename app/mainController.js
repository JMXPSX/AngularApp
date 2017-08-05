angular.module('myApp')

.controller('MainCtrl',['$location', function($location){
    var ctrl = this;
    
    ctrl.navigateToOption = function(navigateOption) {
        switch(parseInt(navigateOption)) {
            case 1 :
            case 2 :
            case 3 :
            case 4 :
            case 5 :
            case 6 :
            case 7 :
            case 8 :
            case 9 :
            case 10 :
                $location.path('/lesson-' + navigateOption);
                break;
            default :
                $location.path('/about');
                break;
        }
    }
    
    if(ctrl.navigateTo == '0') {
        ctrl.navigateToOption(0);
    }
    
}]);