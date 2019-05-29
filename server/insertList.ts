/*
 * @Author: Blue
 * @Date: 2019-05-23 16:49:09
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-24 15:08:39
 */

const path =      require('path');
const fs =        require('fs');
const chalk =     require('chalk');
const execa =     require('execa');
const readline =  require('readline');
const jsonFormat= require('json-format');

import { pascal } from 'name-styles';
import { getContent } from './lib/getContent';

async function getMessage() {
    return new Promise((resolve, reject) => {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });

        let msg = '';

        rl.on('line', ( input:any ) => {
            msg = input;
            rl.close();
            resolve( msg );
        }); 
    });   
};

async function setContent( i:any ) {
    return await fs.writeFileSync(`${ path.resolve('./') }/Guide.json`, i );
};

function insertList(arr, last) {

    let _msg = last.split(' ');
    if( _msg.length > 1 ) {
        arr[ pascal( _msg[0] ) ] = {
            [ pascal( _msg[1] ) ] : _msg[1]
        }
    }
    else {
        arr[pascal( _msg[0] )] =  _msg[0] ;
    }
   
    return arr;
}

async function addContent() {
    try {
        let content =  JSON.parse( await getContent() || '{}' );
        let inputMsg = await getMessage();
        let j = insertList(content, inputMsg);
        await setContent( jsonFormat( j ) );
        console.log( chalk.blue('添加成功') )
    } catch( e ) {
        console.log( chalk.blue( e ) );
    }
};

addContent();

