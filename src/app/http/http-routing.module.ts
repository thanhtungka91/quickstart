import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpComponent }      from './http.component';

const heroesroutes: Routes = [
  { path: 'httpApi',     component: HttpComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(heroesroutes) ],
  exports: [ RouterModule ]
})
export class HttpRoutingModule {}
