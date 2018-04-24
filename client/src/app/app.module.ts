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


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, UserAccountService, OrderService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
