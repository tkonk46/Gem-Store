var gems = undefined;

angular.module('myApp', ['product-directives']);

angular.module('myApp').factory("Gravatar", function GravatarFactory(){
    var avatarSize=80;
    var avatarUrl= 'http://www.gravatar.com/avatar/';
    return function(email){
        return avatarUrl+CryptoJS.MD5(email).toString() + "?size="+
            avatarSize.toString();
    }
    
});


angular.module('myApp').controller('myController', ['$http', '$log', '$scope', 'ProductsService', 'Gravatar', function($http, $log, $scope, ProductsService, Gravatar){
  ProductsService.get().then(
      function(response){
          $scope.model=response.data;
      },
      function(response){
          $log.log("Could not load products!"+response.status)                                    
      });
    $scope.gravatarUrl=function(email){
        return Gravatar(email);
    }
}]);
    

angular.module('myApp').directive('myExample', function(){
  return{
    template:'<div>This is an example of a directive.</div>'
  };
})



