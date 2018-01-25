import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {LcService} from './services/lc.service';
import {UserRegistrationService} from "./services/user-registration.service";
import {UserParametersService} from "./services/user-parameters.service";
import {UserLoginService} from "./services/user-login.service";
import {CognitoUtil} from "./services/cognito.service";
import {AwsUtil} from "./services/aws.service";
import {DynamoDBService} from "./services/ddb.service";

import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LogoutComponent } from './components/conform/conform.component';
import {RegistrationConfirmationComponent} from './components/conform/conform.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { Forgotpassword2Component } from './components/forgotpassword/forgotpassword.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResendCodeComponent } from './components/resend-code/resend-code.component'

const appRoutes: Routes = [
  {path:'',component: HomeComponent},
  {path:'products/:id',component: ProductsComponent},
  {path:'sub-categories',component: SubCategoriesComponent},
  {path:'sidenav',component:SideNavComponent},
  {path:'logout',component:LogoutComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotPassword',component:ForgotpasswordComponent},
  {path:'forgotPassword/:email',component:Forgotpassword2Component},
  {path:'register',component:RegistrationComponent},
  {path:'newPassword',component:NewpasswordComponent},
  {path:'resendCode',component:ResendCodeComponent},
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
    LogoutComponent,
    RegistrationConfirmationComponent,
    ForgotpasswordComponent,
    LoginComponent,
    Forgotpassword2Component,
    NewpasswordComponent,
    RegistrationComponent,
    ResendCodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    LcService,
    CognitoUtil,
    AwsUtil,
    DynamoDBService,
    UserRegistrationService,
    UserLoginService,
    UserParametersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
