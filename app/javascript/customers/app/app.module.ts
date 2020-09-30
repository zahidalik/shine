import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerAppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ CustomerAppComponent ],
  bootstrap: [ CustomerAppComponent ]
})
export class CustomerAppModule { }
