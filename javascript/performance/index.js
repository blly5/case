/*
 * @Author: Blue 
 * @Date: 2019-09-06 10:39:12 
 * @Last Modified by:   Blue 
 * @Last Modified time: 2019-09-06 10:39:12 
 */

export default class {
    performance = window.performance;

    apendEl( k = '', v = '') {
        let el = document.createElement('li');
        el.append( `${ k } : ${ v }` );
        document.querySelector('ul').appendChild( el );
    };

    show() {
        document.querySelector('ul').innerHTML = '';
        for(let pms in this.performance) {
            if( typeof( this.performance[pms] ) === 'object' ) {
                this.apendEl(pms);
                for( let pmKeys in this.performance[pms] ) {
                    if ( typeof(this.performance[pms][pmKeys]) === 'number' ) {
                        this.apendEl(`-> ${ pmKeys }`, this.performance[pms][pmKeys])
                    }
                }
            } else if( typeof( this.performance[pms] ) === 'number' ) {

                this.apendEl( pms, this.performance[pms]);
            }
        }
    }
    reload() {
        this.show();
    }
    onLine() {
        requestAnimationFrame(()=>{
            this.show();
            this.onLine();
        })
    }
};