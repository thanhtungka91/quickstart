import { Injectable } from '@angular/core'
import {Headers, Http, Response} from '@angular/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Category} from '../models/category'




@Injectable()
export class HTTPTestService {
  constructor(private http_test : Http){

  }
  // get current time

  private httpUrl = "http://localhost:8080/api/categories";

  getCurrentTime(){
    return this.http_test.get(this.httpUrl)
      .map(res => res.json());
  }
}
