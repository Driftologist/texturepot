var express = require( 'express' )
var app = express()

app.use( require( './controllers' ) )

var port = process.env.PORT || 3000

app.listen( port, function() {
    console.log( 'Server listening on', port )
})