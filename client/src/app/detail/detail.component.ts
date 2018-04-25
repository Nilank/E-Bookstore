import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../services/product.service';

import 'rxjs/add/operator/switchMap';
import {Product} from '../models/product';
import {UserAccountService} from '../services/userAccount.service';
import {CartModel} from '../models/cart';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  productID: string;
  product: Product;
  selectedStyle: string;
  selectedQty: number;

  style: string[] = ['HardBind', 'SoftCopy', 'kindle'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProductService,
              private userAccountService: UserAccountService) {
  }


  ngOnInit() {
    // this.productID = this.route.snapshot.params["productID"]
    // console.log(this.productID);
    this.route.paramMap
      .switchMap((params: ParamMap) => params.getAll('productID'))
      .subscribe(productID => {
        this.productID = productID;
        // console.log(this.productID)
        this.service
          .getProduct(productID)
          .subscribe(product => {
            this.product = product;
          });
      });
  }

  changeStyle(style) {
    this.selectedStyle = style;
  }

  onAdd() {
    this.userAccountService.getCurrentUser();
    const cart = new CartModel( this.selectedStyle, this.selectedQty, this.productID );
    if ( !this.selectedStyle || !this.selectedQty ) {
      alert('You missed something');
      return;
    }
    this.userAccountService.addProductToCart(cart)
      .subscribe(
        data => {
          this.userAccountService.updateCart(data.obj);
          alert("You Item has been successfully to the cart!!!!")
        },
        error => console.error(error)
      );
  }

}


