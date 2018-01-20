import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {LcService} from './services/lc.service';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'products/:id',component: ProductsComponent},
  {path:'sub-categories',component: SubCategoriesComponent},
  {path:'sidenav',component:SideNavComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    SubCategoriesComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
