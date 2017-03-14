import 'rxjs/add/operator/switchMap';
import { Component} from '@angular/core';
import {HTTPTestService} from "./http-api.services";

@Component({
  templateUrl: 'app/templates/http.component.html',
  styleUrls: ['app/public/heroes.component.css'],
})

export class HttpComponent {
  title = 'Tour of Heroes';

  errorMessage: string;
  getData: string;

  constructor(private httpTest: HTTPTestService) { }

  onTestGet() {
    this.httpTest.getCurrentTime()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error =>  this.errorMessage = <any>error);
  }
}


