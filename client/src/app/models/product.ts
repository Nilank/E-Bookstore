export class Product {
    constructor(public name: string,
        public description: string,
        public addedTime: Date,
        public type: string,
        public rating?: number,
        public itemList?: Item) {}
}

export interface Item {

    style: {
        HardBind: number;
        SoftCopy: number;
        kindle: number;
    };
    color: [{
        url: string;
        name: string;
    }];
    price: {
      HardBind: number;
      SoftCopy: number;
      kindle: number;
    };
}
