interface Mailable{
    send(email:string):boolean
    queue(email:string):boolean
}

interface ExtraProperty extends Mailable{
    later(email:string,after:number):void
}


class Human{
    eyes: number;
    ers:number
    constructor(){
        this.eyes
        this.ers
    }
}

class Change extends Human{
    hands:number
    constructor(){       
        super();
        this.hands
    }
}

var per=new Change()