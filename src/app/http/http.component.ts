import 'rxjs/add/operator/switchMap';
import {Component,Pipe, PipeTransform, OnInit} from '@angular/core';
import {HTTPTestService} from "./http-api.services";
import { Category} from '../models/category';

@Component({
  templateUrl: 'app/templates/http.component.html',
  styleUrls: ['app/public/http.component.css'],
})


export class HttpComponent implements OnInit{
  title = 'Tour of Heroes';

  errorMessage: string;
  getData: any;


  constructor(private httpTest: HTTPTestService) { }

  private model = new Category('','');
  private editing = false;

  ngOnInit(){
    this.getCategories();
  }

  getCategories() {
    this.httpTest.getCategories()
      .subscribe(
        data => this.getData = data,
        error =>  this.errorMessage = <any>error);
  }

  postCategory(){
    debugger;
    this.httpTest.postCategory(this.model)
      .subscribe(
      data => this.getData = data,
      error =>  this.errorMessage = <any>error);
  }

  // delete need to update in list -> take later
  deleteCategory(id:string){
    // debugger;
    this.httpTest.deleteCateory(id)
      .subscribe(
        data => this.getData = data,
        error =>  this.errorMessage = <any>error
      );
  }
  // update, edit category
}


