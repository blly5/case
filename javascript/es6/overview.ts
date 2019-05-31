

//Object.assign

let colors = {};
let sky = { type:'blue' }

//bad
Object.assign(colors, sky); 

//good
colors = Object.assign({}, colors, sky );



