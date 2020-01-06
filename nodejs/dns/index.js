/*
 * @Author: Blue 
 * @Date: 2019-12-07 17:23:54 
 * @Last Modified by: Blue
 * @Last Modified time: 2019-12-07 17:50:45
 */
let dns = require('dns');

//tools
dns.lookup('baidu.com', { all: true }, (err, addr, family) => {
  console.log(err, addr, family);
});



