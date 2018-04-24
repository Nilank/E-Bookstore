import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserAccountService } from './services/userAccount.service';

import { ProductService } from './services/product.service';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { OrderService } from './services/order.service';
import { SharedService } from './services/shared.service';
import { LoginComponentComponent } from './login-component/login-component.component';
import {AuthService} from "./services/auth.service";
import { ItemComponentComponent } from './item-component/item-component.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout-component/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    ItemComponentComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule
  ],

  providers: [ProductService, UserAccountService, OrderService, SharedService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
