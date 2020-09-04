import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root-app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DemoMaterialModule } from './material-module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidenavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
