var express = require( 'express' )
var websockets = require( './websockets' )

var app = express()

app.use( require( './controllers' ) )

var port = process.env.PORT || 3000
var server = app.listen( port, function() {
    console.log( 'Server listening on', port )
})
websockets.connect( server )
