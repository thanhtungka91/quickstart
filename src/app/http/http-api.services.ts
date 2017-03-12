import { Injectable } from '@angular/core'
import {Headers, Http, Response} from '@angular/http'
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


// interface for Category
export class Hero {
  id: number;
  name: string;
}

@Injectable()
export class HeroService {

  private heroesUrl =  'http://localhost:8080/api/categories';
  // URL to web API
  constructor (private http: Http) {}

  getHeroes (): Observable<Hero[]> {
    // debugger;
    // alert(this.heroesUrl);
    return this.http.get(this.heroesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    alert("it seems to be good");
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
