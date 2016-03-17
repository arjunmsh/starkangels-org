// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'firebase', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'LoginCtrl'
  })  
  .state('signin', {
    url: '/signin',
    templateUrl: 'templates/signin.html',
    controller: 'LoginCtrl'
  })
  .state('next', {
    url: '/next',
    templateUrl: 'templates/next.html',
    controller: 'LoginCtrl'
  });

  $urlRouterProvider.otherwise("/");

})

.controller('LoginCtrl', function($scope, $state, $cordovaFacebook) {

  $scope.data = {};

  $scope.signupEmail = function(){  

    var ref = new Firebase("https://a1202.firebaseio.com");

    ref.createUser({
      email    : $scope.data.email,
      password : $scope.data.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });

  };

  $scope.loginEmail = function(){

    var ref = new Firebase("https://a1202.firebaseio.com");

    ref.authWithPassword({
      email    : $scope.data.email,
      password : $scope.data.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
          console.log("Authenticated successfully with payload:", authData);
	  $state.go('next');
      }
    });

  };

  $scope.loginFacebook = function(){
   
    var ref = new Firebase("https://a1202.firebaseio.com");


    if(ionic.Platform.isWebView()){

      $cordovaFacebook.login(["public_profile", "email"]).then(function(success){
     
        console.log(success);

        ref.authWithOAuthToken("facebook", success.authResponse.accessToken, function(error, authData) {
          if (error) {
            console.log('Firebase login failed!', error);
          } else {
            console.log('Authenticated successfully with payload:', authData);
          }
        });
     
      }, function(error){
        console.log(error);
      });        

    }
    else {

      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });

    }

  };

});
