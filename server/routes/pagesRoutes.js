/**
 * tsiram - Your webapp
 * © 2023 Brian Gormanly
 *
 */

var express = require( 'express' );
var router = express.Router( );



router.route( '/' )
    .get( ( req, res ) => {
        res.render( 'index' );
    }
    );

router.route( '/about' )
    .get( ( req, res ) => {
        res.render( 'about' );
    }
    );

router.route( '/courses' )
    .get( ( req, res ) => {
        res.render( 'courses' );
    }
    );

router.route( '/courses/org-and-arch' )
    .get( ( req, res ) => {
        res.render( './course-resources/org-and-arch' );
    }   
    );

router.route( '/courses/capping' )
    .get( ( req, res ) => {
        res.render( './course-resources/capping' );
    }   
    );

router.route( '/courses/grad-is-capping' )
    .get( ( req, res ) => {
        res.render( './course-resources/grad-is-capping' );
    }   
    );

router.route( '/research' )
    .get( ( req, res ) => {
        res.render( 'research' );
    }
    );

router.route( '/privacy' )
    .get( ( req, res ) => {
        res.render( './website/privacy' );
    }
    );

router.route( '/tos' )
    .get( ( req, res ) => {
        res.render( './website/terms' );
    }   
    );

router.route( '/codebot' )
    .get( ( req, res ) => {

        // will need to be re-evaluated when generic version of products page is implemented.
        // (and moved to a controller)
        //let product = await productService.getActiveProductWithProductImagesById(1);
        //console.log(product);

        res.render( 'codebot' );
    }
    );



module.exports = router;