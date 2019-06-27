export interface getLocationIP {

};

import * as request from 'request';


function requestFunc( url ) {
    return request( url );
};

async function getLocationIP() {
    console.log(await request('http://www.baidu.com'));
};
getLocationIP();