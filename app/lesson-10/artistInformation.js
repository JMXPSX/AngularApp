angular.module('myApp')

.directive('artistInformation',['SearchMusicFormModel', function(SearchMusicFormModel){
    
    return {
        restrict : 'E',
        templateUrl : "lesson-10/music-form-detail.html",
        scope : {
            selectedItem : "=",
            allArtists : "="
        },
        link : function(scope, element) {
            scope.form = SearchMusicFormModel;
            
            scope.$watch(function(){
                return scope.selectedItem;
            }, function(selectedItem){
                if(selectedItem) {
                    SearchMusicFormModel.setInformation(selectedItem);
                    scope.searchRelatedArtists(selectedItem);
                }
            });
            
            scope.searchRelatedArtists = function(selectedItem) {
                scope.relatedArtists = [];
                var existingArtist = "";
                for(var index = 0; index < scope.allArtists.length && scope.relatedArtists.length < 6; index++) {
                    if(scope.allArtists[index].mainGenre.toLowerCase() == selectedItem.mainGenre.toLowerCase() &&
                       existingArtist.indexOf(scope.allArtists[index].artistName) === -1 &&
                       scope.allArtists[index].artistName !== selectedItem.artistName) {
                        existingArtist += scope.allArtists[index].artistName + "|";
                        scope.relatedArtists.push(scope.allArtists[index].artistName);
                    }
                }
                
                console.log(scope.relatedArtists);
            }
        }
    }
}]);