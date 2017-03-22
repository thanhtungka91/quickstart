import 'rxjs/add/operator/switchMap';
import {Component,Pipe, PipeTransform, OnInit} from '@angular/core';
import {HTTPTestService} from "../http-api.services";
import { Category} from '../../models/category';

@Component({
  selector: 'category-list',
  templateUrl: '../../../app/http/listCategories/http-list.component.html',
  styleUrls: ['../../../app/public/http.component.css'],
})


export class HttpListComponent implements OnInit{

  errorMessage: string;
  getData: any;
  private editing = false;

  constructor(private httpTest: HTTPTestService) { }

  ngOnInit(){
    this.getCategories();
  }

  // list all category
  getCategories() {
    this.httpTest.getCategories()
      .subscribe(
        data => this.getData = data,
        error =>  this.errorMessage = <any>error
      );
  }
}


