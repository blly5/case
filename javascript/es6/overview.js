//Object.assign
var colors = {};
var sky = { type: 'blue' };
//bad
Object.assign(colors, sky);
//good
colors = Object.assign({}, colors, sky);
