import 'rxjs/add/operator/switchMap';
import {Component,Pipe, PipeTransform, OnInit} from '@angular/core';
import {HTTPTestService} from "../http-api.services";
import { Category} from '../../models/category';

@Component({
  selector: 'category-add',
  templateUrl: '../../../app/http/addCategory/http-add.component.html',
  styleUrls: ['../../../app/public/http.component.css'],
})


export class HttpAddComponent {

  errorMessage: string;
  getData: any;
  private editing = false;
  private model = new Category('','');

  constructor(private httpTest: HTTPTestService) { }

  postCategory(){
    this.httpTest.postCategory(this.model)
      .subscribe(
        data => this.getData = data,
        error =>  this.errorMessage = <any>error
      );
  }

  // edit, emit category when edit
  // editCategory(){
  //   // Emit edit event
  //   // EmitterService.get(this.editId).emit(this.comment);
  //   this.httpTest.editCategory();
  // }

  // update new category
  updateCategory(){
    this.httpTest.updateCategory(this.model)
      .subscribe(
        data => this.getData = data,
        error => this.errorMessage = <any> error
      );
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


