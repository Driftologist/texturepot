angular.module( 'app' )
.controller( 'ApplicationCtrl', function( $scope, $window, UserSvc, jwtHelper ) {
    $scope.$on( 'login', function( _, user ) {
        $scope.currentUser = user
    })
    if ($window.localStorage.token) {
        UserSvc.getUser().then(function(val) {
            if (val.data) {
                $scope.$emit( 'login', jwtHelper.decodeToken($window.localStorage.token) )
            }
        })
    }
    $scope.logout = function() {
        if ($scope.currentUser) {
            delete $scope.currentUser
            UserSvc.removeToken()
        }
    }
})