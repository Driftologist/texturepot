angular.module( 'app' )
    .controller( 'PostsCtrl', function( $scope, PostsSvc ) {
    $scope.addPost = function() {
        if ($scope.postBody) {
            PostsSvc.create( {
                username: 'Drift',
                body: $scope.postBody
            }).success( function( post ) {
//                $scope.posts.unshift( post )
                $scope.postBody = null
            })
        }
    }
    
    $scope.$on( 'ws:new_post', function( _, post ) {
        console.log('hi')
        $scope.$apply( function() {
            $scope.posts.unshift( post )
        })
    })
    
    PostsSvc.fetch().success( function( posts ) {
        $scope.posts = posts
    })
})