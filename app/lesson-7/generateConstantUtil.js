'use strict';

angular.module('myApp')

.factory('GenerateConstantUtil',['$injector', function($injector){
    
    var constantUtil = this;
    
    constantUtil.getDynamicConstantValue = function(key, value) {
        try {
            return $injector.get(key + "_" + value);
        } catch(err) {
            return err;
        }
    }
    
    return constantUtil;
}]);