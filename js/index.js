var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
	$scope.data=[
		{
			"price":988,
			"txt":1,
			"yun":10
		}
	]
	$scope.reduce=function(index){
		if($scope.data[index].txt>1)$scope.data[index].txt--;
	}
	$scope.add=function(index){
		$scope.data[index].txt++;
	}
	$scope.totil = function(){
		var allprice = "";
		for(var i = 0 ; i <$scope.data.length;i++ ){
		allprice += "¥"+($scope.data[i].price * $scope.data[i].txt+$scope.data[i].yun).toFixed(2);
		}
		return allprice;
	}
	$scope.zong = function(){
		var allprice = "";
		for(var i = 0 ; i <$scope.data.length;i++ ){
		allprice += "¥"+($scope.data[i].price * $scope.data[i].txt).toFixed(2);
		}
		return allprice;
	}

})