import 'rxjs/add/operator/switchMap';
import {Component,Pipe, PipeTransform, OnInit} from '@angular/core';
import {HTTPTestService} from "./http-api.services";
import { Category} from '../models/category';

@Component({
  templateUrl: 'app/templates/http.component.html',
  styleUrls: ['app/public/heroes.component.css'],
})


export class HttpComponent implements OnInit{
  title = 'Tour of Heroes';

  errorMessage: string;
  getData: any;


  constructor(private httpTest: HTTPTestService) { }

  ngOnInit(){
    this.onTestGet();
  }

  onTestGet() {
    this.httpTest.getCurrentTime()
      .subscribe(
        data => this.getData = data,
        error =>  this.errorMessage = <any>error);
  }
}


