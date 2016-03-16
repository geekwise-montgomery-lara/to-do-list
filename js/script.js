var TheMeaningOfLife = '42';
var app = angular.module('phobiaApp', []);
app.controller('phobiaCtrl',function($scope){
    $scope.edit_on = true;
    $scope.edit = function(){
        if ($scope.edit_on == true){
            $scope.edit_on = false;
        }else{
            $scope.edit_on = true;
        }
    };
    $scope.edit_mode = function(){
        if ($scope.edit_on == true){
            return true;
        }else{
            return false;
        }
    };
    $scope.add_phobia=function(name,desc){
        $scope.phobias.push({
            name:name,
            desc:desc
        });
    };
    $scope.phobias=[{"name":"hippopotomonstrosesquipedaliophobia","desc":"Fear of long words"},{"name":"Triskaidekaphobia","desc":"Fear of the number 13"}];
});