

export default class {
    performance = window.performance;

    apendEl( k = '', v = '') {
        let el = document.createElement('li');
        el.append( `${ k } : ${ v }` );
        document.querySelector('body').appendChild( el );
    };

    show() {
        document.querySelectorAll('li').remove();
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
};