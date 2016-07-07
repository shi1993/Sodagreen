var appcan=angular.module('myApp',['ui.router']);
appcan.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('feiyu',{
		url:'/feiyu',
		templateUrl:'pages/feiyu.html'
	});
	$urlRouterProvider.otherwise('/');
});