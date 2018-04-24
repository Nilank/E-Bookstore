
export class Order {
  constructor(public productList: ListOfProducts[],
              public orderDate: Date,
              public userAccountID: string,
              public receiverName: string,
              public contactNumber: string,
              public city: String,
              public state: string,
              public zipCode: number,
              public addressLine1: string,
              public addressLine2: string
              //public city: String
  ) {
  }
}

export interface ListOfProducts {
  style: string;
  qty: number;
  productId: string;
}
