import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'dashboard';

  //public covidChart$: Observable<any>;

  // constructor(private http: HttpClient){
  // }

  // ngOnInit(){

    //this.covidChart$ = this.http.get("https://covid-api.com/api/reports?date=2020-04-16&q=US%20Alabama&iso=USA&region_name=US&region_province=Alabama&city_name=Autauga&per_page=20").subscribe(d=> console.log(d));
  }

