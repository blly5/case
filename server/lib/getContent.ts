/*
 * @Author: Blue
 * @Date: 2019-05-24 14:48:42
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-24 15:09:17
 */

 export interface getContent {

 };

 const path =       require('path');
 const readline =   require('readline');
 const chalk =      require('chalk');
 const fs =         require('fs');

 export const getContent = async function() {

    try {
        return await fs.readFileSync(`./Guide.json`, 'utf-8');

     } catch (e) {
        let _created = await fs.writeFileSync('./Guide.json', 'utf-8', {});
        console.log( chalk.blue( `Create in : ${ path.resolve('./') }`) );
        return _created;
     }
 };




