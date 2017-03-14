import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HttpComponent }    from './http.component';

import { HttpRoutingModule } from './http-routing.module';
import { HTTPTestService } from "./http-api.services";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpRoutingModule
  ],
  declarations: [
    HttpComponent
  ],
  providers: [ HTTPTestService ]
})
export class HttpApiModule {}
