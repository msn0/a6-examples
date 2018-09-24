import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProductComponent } from './component/product/product.component';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { PricePipe } from './pipe/price.pipe';
import { DatePipe } from './pipe/date.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    PricePipe,
    DatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [ProductComponent]
})
export class AppModule { }
