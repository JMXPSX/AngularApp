angular.module('myApp')

.controller('ServiceCtrl', ['AsObjectService', 'JSONService', function(AsObjectService, JSONService){
    var ctrl = this;
    
    ctrl.bindServiceData = function() {
        ctrl.form = AsObjectService;
    }
    
    ctrl.bindJSONData = function() {
        JSONService.getPlayerProfile().success(function(playerData) {
            ctrl.form = playerData;
        });
    }
}]);