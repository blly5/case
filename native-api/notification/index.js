;
export default class {

    constructor(title, opt) {
        this.title = title || 'test';

        const defaultOpt = {
            dir: 'ltr',
            lang: 'CN',
            body: '这是一段测试的文字,您也可以替代它',
            tag: Math.round(Math.random()*10**20)+'',
            icon: ''
        };

        this.option = Object.assign({}, defaultOpt, opt);
    }

    show ( { title, onclick = {}, onshow = {}, onerror = {}, onclose = {} } ) {
        this.title = title || this.title;
        if(!'Notification' in window) {
            console.log('dont Suport Notification');
            return false;
        };
        let notice = new Notification(this.title, this.option);
        notice.onclick = onclick;
        notice.onshow = onshow;
        notice.onerror = onerror;
        notice.onclose = onclose;
    }
    
};