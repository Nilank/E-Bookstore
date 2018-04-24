import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ProductService } from './services/product.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout-component/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    DetailComponent,
    ViewOrderComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    ItemComponentComponent,

    DetailComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],


  providers: [ProductService, UserAccountService, OrderService, SharedService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
