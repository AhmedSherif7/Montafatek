import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { StepsModule } from 'primeng/steps';
import { HttpClientModule } from '@angular/common/http';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BlockUIModule } from 'primeng/blockui';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from 'primeng/message';
import { MenubarModule } from 'primeng/menubar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { DialogModule } from 'primeng/dialog';
// import { ChartModule } from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductComponent } from './components/product/product.component';
import { ElectronicsComponent } from './components/product/electronics/electronics.component';
import { HeadphonesComponent } from './components/product/electronics/headphones/headphones.component';
import { LaptopsComponent } from './components/product/electronics/laptops/laptops.component';
import { MobilesComponent } from './components/product/electronics/mobiles/mobiles.component';
import { TelevisionsComponent } from './components/product/electronics/televisions/televisions.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ElectronicsComponent,
    HeadphonesComponent,
    LaptopsComponent,
    MobilesComponent,
    TelevisionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    CarouselModule,
    ButtonModule,
    RatingModule,
    StepsModule,
    HttpClientModule,
    ScrollTopModule,
    BlockUIModule,
    BadgeModule,
    ToastModule,
    BrowserAnimationsModule,
    MessageModule,
    MenubarModule,
    DynamicDialogModule,
    SelectButtonModule,
    AvatarModule,
    SidebarModule,
    ScrollPanelModule,
    TimelineModule,
    CardModule,
    PasswordModule,
    DividerModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
