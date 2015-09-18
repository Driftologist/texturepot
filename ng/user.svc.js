angular.module( 'app' )
.service( 'UserSvc', function( $http ) {
    var svc = this
    svc.getUser = function() {
        return $http.get( '/api/users' )
    }
    svc.login = function( username, password ) {
        return $http.post( '/api/sessions', {
            username: username,
            password: password
        }).then( function( val ) {
            svc.token = val.data
            $http.defaults.headers.common[ 'X-Auth' ] = val.data
            return svc.getUser()
        })
    }
    svc.createUser = function( username, password ) {
        return $http.post( '/api/users', {
            username: username,
            password: password
        }).then( function( val ) {
            return svc.login( val.config.data.username, val.config.data.password )
        })
    }
    svc.removeToken = function() {
        console.log(svc.token)
        svc.token = undefined
    }
})