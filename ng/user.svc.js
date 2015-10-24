angular.module( 'app' )
.service( 'UserSvc', function( $http ) {
    var svc = this
    svc.getUser = function() {
        $http.defaults.headers.common[ 'X-Auth' ] = window.localStorage.token
        return $http.get( '/api/users' )
    }
    svc.login = function( username, password ) {
        return $http.post( '/api/sessions', {
            username: username,
            password: password
        }).then( function( val ) {
            window.localStorage.token = val.data
            $http.defaults.headers.common[ 'X-Auth' ] = window.localStorage.token
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
        delete window.localStorage.token
    }
})