'use strict';

angular.module('myApp')

.service('AsObjectService', [function(){
    var asObjectSvc = {
        firstName : "Kemba",
        lastName : "Walker",
        jerseyNumber : 35,
        teamName : "Charlotte Bobcats"
    };
    
    return asObjectSvc;
}]);