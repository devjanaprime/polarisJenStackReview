$( document ).ready( readyNow  );

function newMessage(){
    console.log( 'in newMessage' );
    // get user input & assemble into an object
    let objectToSend = {
        from: $( '#nameIn' ).val(),
        message: $( '#messageIn' ).val()
    } // end objectToSend
    console.log( 'sending:', objectToSend );
    // send to server via POST
    $.ajax({
        method: 'POST',
        url: '/messages',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from POST with:', response );
    }).catch( function( error ){
        alert( 'problem!' );
    }) // end ajax
} // end newMessage

function readyNow(){
    $( '#refreshButton' ).on( 'click', refreshPage );
    $( '#sendButton' ).on( 'click', newMessage );
} // end readyNow

function refreshPage(){
    // GET call to messages route
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then( function( response ){
        console.log( 'back from GET call with:', response );
        // empty output element
        let outputElement = $( '#messagesOut' );
        outputElement.empty();
        // loop through messages returned 
        for( message of response ){
            // display each on DOM
            let outputString = '<li>"'; 
            outputString += message.message; 
            outputString += '": '; 
            outputString += '<em>' + message.from + '</em>'; 
            outputString += '</li>'; 
            outputElement.append( outputString );
        } // end for
    }).catch( function( error ){
        // display that there was an error
        alert( 'nope.' );
    }) // end ajax
} // end refreshPage