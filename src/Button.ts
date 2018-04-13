
export class Button {

    private element:JQuery;

    constructor(){
        this.element = $('<button>ボタン</button>');

        this.element.on('click', this.onClick.bind(this));
    }

    public el():JQuery{
        return this.element;
    }

    private onClick(event:JQueryEventObject):void{

        if(process.env.NODE_ENV == 'production'){
            console.log('click! 本番です.');
        }else{
            console.log('click!');
        }
    }
}