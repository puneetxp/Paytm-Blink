import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckoutModule } from '../../projects/angular-checkout-js/src/lib/checkout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CheckoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
