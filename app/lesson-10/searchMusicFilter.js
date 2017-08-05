angular.module('myApp')

.filter('artistFilter', ['ARTIST_CONSTANT', 'ALBUM_CONSTANT',function(ARTIST_CONSTANT, ALBUM_CONSTANT){
    return function(listToFilter, textToFilter, criteria) {
        var filteredList = [];
        if(!textToFilter || textToFilter.length == 0) {
            return listToFilter;
        }
        
        for(var index = 0; index < listToFilter.length; index++) {
            switch(criteria) {
                case ARTIST_CONSTANT :
                    if(listToFilter[index].artistName.toLowerCase().indexOf(textToFilter.toLowerCase()) != -1) 
                        filteredList.push(listToFilter[index]);
                    break;
                case ALBUM_CONSTANT :
                    if(listToFilter[index].albumName.toLowerCase().indexOf(textToFilter.toLowerCase()) != -1) 
                        filteredList.push(listToFilter[index]);
                    break;
            }
        }
        
        return filteredList;
    }
}]);