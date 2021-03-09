import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '@rest/user/user.service';

import { CustomFormsModule } from 'ngx-custom-validators';

import { AuthService } from '@modules/auth/services/auth.service';
import { AuthGuard } from '@modules/auth/guards/auth.guard';

import { NavbarModule } from './containers/navbar/navbar.module';
import { CatalogModule } from './containers/catalog/catalog.module';
import { GeneralModule } from './components/general/general.module';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CommonModule,
    NavbarModule,
    AppRouting,
    AuthService,
    RouterModule,
    CatalogModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
    GeneralModule
  ],
  providers: [ AuthService, AuthGuard, UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
