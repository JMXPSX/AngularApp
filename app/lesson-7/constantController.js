angular.module('myApp')

.controller('ConstantCtrl', ['GenerateConstantUtil',
    'PRIMITIVE_VALUE', 'ARRAY_VALUE', 'DATE_TODAY', 'OBJECT_VALUE',
    function(GenerateConstantUtil, PRIMITIVE_VALUE, ARRAY_VALUE, DATE_TODAY, OBJECT_VALUE){
    var ctrl = this;
    
    ctrl.primitiveValue = PRIMITIVE_VALUE;
    ctrl.arrayValue = ARRAY_VALUE;
    ctrl.dateToday = DATE_TODAY;
    ctrl.constantObject = OBJECT_VALUE;
        
    ctrl.dynamic1 = GenerateConstantUtil.getDynamicConstantValue("PREFIX", "SUFFIX");
    
}])