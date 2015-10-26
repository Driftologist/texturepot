var express = require( 'express' )
//var logger = require( 'morgan' )
var app = express()

//app.use( logger( dev ) )
app.use( require( './controllers' ) )

var port = process.env.PORT || 3000

app.listen( port, function() {
    console.log( 'Server listening on', port )
})