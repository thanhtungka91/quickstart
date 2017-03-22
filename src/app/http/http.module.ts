import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {HttpComponent}    from './http.component';

import { HttpRoutingModule } from './http-routing.module';
import { HTTPTestService } from "./http-api.services";
import {BrowserModule} from "@angular/platform-browser";
import {HttpListComponent} from "./listCategories/http-list.component";
import {HttpAddComponent} from "./addCategory/http-add.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpRoutingModule
  ],
  declarations: [
    HttpComponent,
    HttpListComponent,
    HttpAddComponent
  ],
  providers: [ HTTPTestService ]
})
export class HttpApiModule {}
