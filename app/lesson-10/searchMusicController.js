angular.module('myApp')

.controller('SearchMusicController', [
    'SearchMusicService', 'ARTIST_CONSTANT', 'ALBUM_CONSTANT', function(SearchMusicService, ARTIST_CONSTANT, ALBUM_CONSTANT){
    
    var ctrl = this;
    
    ctrl.searchBySelection = ARTIST_CONSTANT;
    
    ctrl.loadSearchMusicData = function() {
        SearchMusicService.getMusicData().success(function(musicInfo){
            
            ctrl.musicDataList = musicInfo.musicData;
        })
    }
    
    ctrl.selectMusic = function(selectedMusic) {
        ctrl.selectedMusic = selectedMusic;
    }
    
    ctrl.loadSearchMusicData();
    
    
}]);