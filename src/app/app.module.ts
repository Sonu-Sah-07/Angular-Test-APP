import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { RouterModule } from '@angular/router';
import { NavigationModule } from './navigation/navigation.module';
import { ListPersonComponent } from './list-person/list-person.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AgePipe } from './age.pipe'
import { InterceptInterceptor } from './intercept.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddPersonComponent,
    ListPersonComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NavigationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : InterceptInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
