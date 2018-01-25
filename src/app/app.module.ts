import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {LcService} from './services/lc.service';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'products/:id',component: ProductsComponent},
  {path:'sub-categories',component: SubCategoriesComponent},
  {path:'sidenav',component:SideNavComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    SubCategoriesComponent,
    SideNavComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [LcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
