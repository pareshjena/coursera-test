'use strict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', ['$scope', function($scope){
    $scope.lunchMenu = "";
    $scope.msg = "";
    $scope.showMessage = function(){
        if ($scope.lunchMenu === ""){
            $scope.msg = "Please enter data first";
        } else{
            var arrLunchMenu = $scope.lunchMenu.split(',');
            if (arrLunchMenu.length <= 3){
                $scope.msg = "Enjoy!";
            } else{
                $scope.msg = "Too much!";
            }
        }
        
    };

}])

;