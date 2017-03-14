import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }        from './app.component';
import { HeroService }         from './heroes/hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from '../app/heroes/heroes.module';
import { HttpModule }    from '@angular/http';
import {HttpApiModule} from "./http/http.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    HttpModule,
    HttpApiModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
