function WellboreController ($scope, $http) {
        
        
        var wellboreList=[{"uid":"id1","name":"well1"}];
       
        //$.getJSON('/wellbores/wellborelist', function(data){
            
            //$scope.wellboreList = data;
            //$scope.$apply();
        //});
    
        
        function getAllWellbores() {
            console.log('getAllWellbores from client')
            $http.get('http://realtimeviz-ajontved.c9.io/wellbores/wellborelist/').
                success(function(data) {
                    $scope.wellboreList = data;
                });
        }
        
       
        
        getAllWellbores();
}