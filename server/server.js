// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

// uses
app.use( express.static( 'server/public' ) );

// globals
const port = 5000;
let messages = [ { from: 'mom', body: 'I love you' } ];

// spin up server
app.listen( port, ()=> {
    console.log( 'server up on:', port );
}) // end spin up server

app.get( '/messages', ( req,res )=>{
    console.log( '/messages GET hit' );
    res.send( messages );
}) // end messages GET