var app=angular.module('myApp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/q',{
		template:'<h1>片刻永恆</h1>'
	}).when('/w',{
		templateUrl:'pages/xfed.html'
	}).when('/e',{
		template:'<h1>你被寫在我的歌裡</h1>'
	}).when('/r',{
		template:'<h1>如果凝結就是愛</h1>'
	}).when('/t',{
		template:'<h1>喜歡寂寞</h1>'
	}).when('/y',{
		template:'<h1>燕窩</h1>'
	}).when('/u',{
		template:'<h1>繭</h1>'
	}).otherwise({redirectTo:'/'});
}])