/*
 * @Author: Blue
 * @Date: 2019-05-23 16:49:09
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-23 18:36:37
 */


const path =      require('path');
const fs =        require('fs');
const chalk =     require('chalk');
const execa =     require('execa');
const console =   require('console');
const readline =  require('readline');


async function getContent () {
    try {
        return fs.readFileSync(`${ path.resolve('../') }/index.json`, 'utf-8');
    } catch( e ) {
    console.log( e );
    }
};

async function getMessage() {
 
    return new Promise((resolve, reject) => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
        let msg = '';
        rl.on('line', ( input ) => {
            msg = input;
            rl.close();
            resolve(msg);
        }); 
    });

}

async function addContent( i ) {
    try {
    
    let content = JSON.parse( await getContent() || `{}` ) ; 
    
    if( JSON.stringify( content ) === '{}' ) {
        console.log( await getMessage() );
    }
    } catch( e ) {
        console.log( chalk.red( e ) );
    }
};

addContent();

