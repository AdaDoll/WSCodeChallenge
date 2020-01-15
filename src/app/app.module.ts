import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductDataComponent } from './product-data/product-data.component';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng/carousel';
import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductDataComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    DataViewModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
