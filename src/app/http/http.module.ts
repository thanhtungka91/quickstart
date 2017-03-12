import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HttpComponent }    from './http.component';

import { HttpRoutingModule } from './http-routing.module';
import {HeroService} from "./http-api.services";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpRoutingModule
  ],
  declarations: [
    HttpComponent
  ],
  providers: [ HeroService ]
})
export class HttpApiModule {}
