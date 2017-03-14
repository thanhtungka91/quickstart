import { Injectable } from '@angular/core'
import {Headers, Http, Response} from '@angular/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class HTTPTestService {
  constructor(private http_test : Http){

  }
  // get current time

  private httpUrl = "http://date.jsontest.com";

  getCurrentTime(){
    return this.http_test.get(this.httpUrl)
      .map(res => res.json());
  }
}
