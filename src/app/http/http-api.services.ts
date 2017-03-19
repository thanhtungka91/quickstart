import { Injectable } from '@angular/core'
import {Headers, Http, Response, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Category} from '../models/category'
import { Observable } from 'rxjs/Rx';


@Injectable()
export class HTTPTestService {
  constructor(private http_test : Http){

  }
  // get current time

  private httpUrl = "http://localhost:8080/api/categories";

  getCategories(){
    return this.http_test.get(this.httpUrl)
      .map(res => res.json());
  }

  postCategory(body:Object){
    // create temp category object
    let category = JSON.stringify(body);

    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });
    return this.http_test.post(this.httpUrl, category, options)
      .map(res => res.json());
    //   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteCateory(id:string): Observable<any>{
    debugger;
    let deleteUrl = this.httpUrl + '/' + id;
    return this.http_test.delete(deleteUrl)
      .map(res=> res.json());
  }
}
