'use strict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', ['$scope', function($scope){
    $scope.lunchMenu = "";
    $scope.msg = "";
    $scope.showMessage = function(){
        if (lunchMenu === ""){
            msg = "Please enter data first";
        } else{
            var arrLunchMenus = lunchMenu.split(',');
            if (arrLunchMenus.length <= 3){
                msg = "Enjoy!";
            } else{
                msg = "Too much!";
            }
        }
        
    };

}])

;