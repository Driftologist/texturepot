describe( 'post.svc', function() {
    beforeEach( module( 'app' ) )
    var PostSvc
    
    beforeEach( inject( function( _PostSvc_ ) {
        PostSvc = _PostSvc_
    }))
    
    describe( '#fetch', function() {
        it( 'exists', function() {
            expect( PostSvc.fetch ).to.exist
        })
    })
})