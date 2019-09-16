/*
 * @Author: Blue
 * @Date: 2019-05-27 13:54:47
 * @Last Modified by: blue
 * @Last Modified time: 2019-05-27 14:39:11
 */

const Vue =           require('vue');
const renderer =      require('vue-server-renderer').createRenderer()
const express =       require('../node_modules/express');
const fs =            require('fs');
let app = express();

const vueApp = new Vue({
    template: fs.readFileSync('./tpl/index.tpl.html', 'utf-8')
});

app.get('*',(req,res) => {
    renderer.renderToString(vueApp, (err, html) => {
        res.send( html )
    } );
});

app.listen('8082');