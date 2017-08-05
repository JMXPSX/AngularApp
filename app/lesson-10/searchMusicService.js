angular.module('myApp')

.service('SearchMusicService', ['$http', function($http){
    var searchMusicService = this;
    
    searchMusicService.getMusicData = function() {
        return $http.get('lesson-10/data/musicInformation.json');
    }
    
    return searchMusicService;
}]);