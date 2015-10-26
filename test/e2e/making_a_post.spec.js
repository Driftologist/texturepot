var db = require( '../../db' )
var chai = require( 'chai' )
chai.use( require( 'chai-as-promised' ) )
var expect = chai.expect

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
        
        // check that new post appears on the page
        expect( element.all( by.css( 'ul.posts li' ) ).first().getText() )
            .to.eventually.contain( post )
    })
    afterEach( function() {
        db.connection.db.dropDatabase()
    })
})