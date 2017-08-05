angular.module('myApp')

.factory('SearchMusicFormModel', [function(){
    
    var searchMusicFM = this;
    
    searchMusicFM.albumName = "";
    searchMusicFM.artistName = "";
    searchMusicFM.yearRelease = "";
    searchMusicFM.mainGenre = "";
    searchMusicFM.subGenre = "";
    
    searchMusicFM.setInformation = function(selectedItem) {
        searchMusicFM.albumName = selectedItem.albumName;
        searchMusicFM.artistName = selectedItem.artistName;
        searchMusicFM.yearRelease = selectedItem.yearRelease;
        searchMusicFM.mainGenre = selectedItem.mainGenre;
        searchMusicFM.subGenre = "";
        if(selectedItem.subGenre.length > 0) {
            angular.forEach(selectedItem.subGenre, function(value){
                 searchMusicFM.subGenre += value + "\n";
            });
        }
        
    }
    
    return searchMusicFM;
}]);