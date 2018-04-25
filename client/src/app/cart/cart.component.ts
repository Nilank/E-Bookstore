import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';
import {UserAccountService} from '../services/userAccount.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartTotal: number = 0;
  products: Product[] = [];
  constructor(private productService: ProductService,
              private userAccountService: UserAccountService) {
  }

  getTotal(){
    let i = 0;
    let myTotal = 0;
    for(let cartItem of this.userAccountService.cart) {
      let prod = this.productService.getProduct(cartItem.productId);
      console.log(prod);
      console.log('name -> '+ [this.products[i].name]);
      console.log('style -> '+ [cartItem.style]);
      console.log('price -> '+ this.products[i].itemList.price[cartItem.style])
      myTotal = myTotal + ((this.products[i].itemList.price[cartItem.style]) * cartItem.qty)
      console.log(myTotal);
      i++;
    }

    this.cartTotal = myTotal;
  };

  onDelete(cart) {
    this.userAccountService.getCurrentUser();
    this.userAccountService.deleteCart(cart)
      .subscribe(
        data => {
          console.log(data);
          this.userAccountService.deleteCartItem(data.obj);
          this.userAccountService.cart = [];
          this.products = [];
          this.userAccountService.populateProducts(this.products);
        },
        error => console.error(error)
      );
  }

  ngOnInit() {
    this.userAccountService.cart = [];
    this.userAccountService.getCurrentUser()
      .subscribe(
        () => {
          this.userAccountService.populateProducts(this.products);
        }
      );
  }
}
