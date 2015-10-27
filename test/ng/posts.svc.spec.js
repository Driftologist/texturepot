describe( 'post.svc', function() {
    beforeEach( module( 'app' ) )
    var PostsSvc, $httpBackend
    
    beforeEach( inject( function( _PostsSvc_, _$httpBackend_ ) {
        PostsSvc = _PostsSvc_
        $httpBackend = _$httpBackend_
    }))
    
    afterEach( function() {
        $httpBackend.flush()
    })
    
    describe( '#fetch', function() {
        beforeEach( function() {
            $httpBackend.expect( 'GET', '/api/posts' )
            .respond([
                { username: 'spirift', body: 'first post' },
                { username: 'spirift', body: 'second post' },
            ])
        })
        
        it( 'gets 2 posts', function() {
            PostsSvc.fetch().then( function( posts ) {
                expect( posts ).to.have.length( 2 )
            })
        })
    })
    
//    describe( '#create', function() {
//        beforeEach( function() {
//            $httpBackend.expect( 'POST', '/api/posts' )
//            .send([
//                { username: 'spirift', body: 'test post POST' }
//            ])
//        })
//        
//        it( 'posts 1 post', function() {
//            PostsSvc.create().success( function( posts ) {
//                expect( posts ).to.have.length( 1 )
//            })
//        })
//    })
})