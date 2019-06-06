
let express = require('express');
let got     = require('got');




async function q(){
    try {
        const response = await got(''); 
        q();
    } catch ( e ) {
        console.log( e );
    }
}
q();