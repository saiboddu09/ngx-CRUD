import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './pages/components/form/form.component';
import { ListComponent } from './pages/components/list/list.component';
import { TodoService } from './pages/services/data.service';
import { TodoState } from './pages/states/data.state';
import { ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([TodoState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
