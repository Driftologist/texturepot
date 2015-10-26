var db = require( '../../db' )
var expect = require( 'chai' ).expect

describe( 'making a post', function() {
    it( 'creates an account and creates a new post', function() {
        browser.get( 'http://localhost:3001' )
        element( by.css( 'nav .register' ) ).click()
        
        // fill out and submit login form
        element( by.model( 'username' ) ).sendKeys( 'drift' )
        element( by.model( 'password' ) ).sendKeys( 'pass' )
        element( by.css( 'form .btn' ) ).click()
        
        
        element( by.css( 'nav .posts' ) ).click()
        
        // submit a new post on the posts page
        var post = 'my test post' + Math.random()
        element( by.model( 'postBody' ) ).sendKeys( post )
        element( by.css( 'form .btn' ) ).click()
        browser.pause()
        
        // check that new post appears on the page
        element.all( by.css( 'ul.list-group li' ) ).first().getText()
            .then(function( text ) {
            expect( text ).to.contain( post )
        })
    })
    afterEach( function() {
        db.connection.db.dropDatabase()
    })
})