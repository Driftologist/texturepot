angular.module( 'app' )
.run( function( $rootScope, $window, $timeout ) {
    (function connect() {
        var url = 'ws://' + $window.location.host
        var connection = new WebSocket( url )
        
        connection.onclose = function( e ) {
            console.log(' WebSocket closed. Reconnecting...' )
            $timeout( connect, 10*1000)
        }

        connection.onopen = function() {
            console.log( 'WebSocket connected' )
        }

        connection.onmessage = function( e ) {
            var payload = JSON.parse( e.data )
            $rootScope.$broadcast( 'ws:' + payload.topic, payload.data )
        }
    })()
})