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
import { ChartModule } from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SecondNavbarComponent } from './components/second-navbar/second-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileAddressComponent } from './components/profile/profile-address/profile-address.component';
import { ProfileOrdersComponent } from './components/profile/profile-orders/profile-orders.component';
import { ProfileSettingsComponent } from './components/profile/profile-settings/profile-settings.component';
import { ProfileWishListComponent } from './components/profile/profile-wish-list/profile-wish-list.component';
import { OrderDetailsComponent } from './components/profile/profile-orders/order-details/order-details.component';
import { ProductComponent } from './components/product/product.component';
import { ElectronicsComponent } from './components/product/electronics/electronics.component';
import { HeadphonesComponent } from './components/product/electronics/headphones/headphones.component';
import { LaptopsComponent } from './components/product/electronics/laptops/laptops.component';
import { MobilesComponent } from './components/product/electronics/mobiles/mobiles.component';
import { TelevisionsComponent } from './components/product/electronics/televisions/televisions.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UsersComponent } from './components/admin-panel/users/users.component';
import { AddAdminComponent } from './components/admin-panel/users/add-admin/add-admin.component';
import { UserOrdersComponent } from './components/admin-panel/users/user-orders/user-orders.component';
import { ProductsComponent } from './components/admin-panel/products/products.component';
import { EditProductComponent } from './components/admin-panel/edit-product/edit-product.component';
import { ProductDetailsComponent } from './components/admin-panel/product-details/product-details.component';
import { AddProductComponent } from './components/admin-panel/add-product/add-product.component';
import { OrdersComponent } from './components/admin-panel/orders/orders.component';
import { EditOrderComponent } from './components/admin-panel/orders/edit-order/edit-order.component';
import { CategoriesComponent } from './components/admin-panel/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SecondNavbarComponent,
    FooterComponent,
    ProfileComponent,
    ProfileAddressComponent,
    ProfileOrdersComponent,
    ProfileSettingsComponent,
    ProfileWishListComponent,
    OrderDetailsComponent,
    ProductComponent,
    ElectronicsComponent,
    HeadphonesComponent,
    LaptopsComponent,
    MobilesComponent,
    TelevisionsComponent,
    AdminPanelComponent,
    UsersComponent,
    AddAdminComponent,
    UserOrdersComponent,
    ProductsComponent,
    EditProductComponent,
    ProductDetailsComponent,
    AddProductComponent,
    OrdersComponent,
    EditOrderComponent,
    CategoriesComponent
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
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
