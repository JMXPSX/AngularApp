angular.module('myApp')

.filter('CustomTextFilter', [function(){
    
    return function(listToFilter, argument) {
        var filteredList = [];
        
        if(!listToFilter) {
            return;
        }
        
        for(var index = 0; index < listToFilter.length; index++) {
            switch(argument) {
                case "name" :
                    if(listToFilter[index].name.startsWith('B'))
                        filteredList.push(listToFilter[index]);
                    break;
                case "age" :
                    if(listToFilter[index].age > 20 && listToFilter[index].age < 30)
                        filteredList.push(listToFilter[index]);
                    break;
                default :
                    filteredList.push(listToFilter[index]);

            }
        }
        
        return filteredList;
    }
}])