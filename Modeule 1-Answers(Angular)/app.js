

(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);



LunchController.$inject = ['$scope'];

function LunchController($scope) {
  $scope.menu = "";
  $scope.message="";

   $scope.getString=function(){
   		var words=$scope.menu.split(',');

   		if ($scope.menu===""){
   			$scope.message="Please enter data";
   		}else if(words.length<=3 ){
   			$scope.message="Enjoy";
   		}else{
        $scope.message="Too Much!";
      }
  		

   };
}
})();

