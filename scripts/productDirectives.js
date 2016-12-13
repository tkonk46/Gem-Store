angular.module('product-directives', []);

angular.module('product-directives')
.factory('ProductsService', function ProductsServiceFactory($http){
    return{
        get: function (){
            return $http.get('/data/product.json');
        }
    };
});

angular.module('product-directives').directive('productDetails', function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/productDetails.html'
    };
});

angular.module('product-directives').directive('panels', function(){
    return{
        restrict: 'E',
        templateUrl: '/templates/panels.html',
        controller: function($scope){
             $scope.tab=1;
             $scope.selectTab=function(setTab){
                $scope.tab=setTab;
             }
             $scope.isSelected=function(currentTab){
             return $scope.tab===currentTab;
             }
        }
            
    };
});

angular.module('product-directives').directive('reviewForm', function(){
    return{
        restrict: 'E',
        templateUrl: '/templates/reviewForm.html',
        controller: function($scope){
            $scope.review={
                stars:'5',
            };
            
            $scope.addReview=function(product){
                if(!product.reviews)
                    product.reviews=[];
                product.reviews.push($scope.review);
                //TODO: Use APIs to push to a database!
                $scope.review={
                    stars: '5'
                }
                return false;
            };

            $scope.validate= function(){
                $scope.reviewForm.stars.$setDirty();
                $scope.reviewForm.body.$setDirty();
                $scope.reviewForm.author.$setDirty();
                if ($scopereviewForm.$valid){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    };
});