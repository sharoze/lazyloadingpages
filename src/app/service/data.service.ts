import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { House } from '../type/house';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string

  constructor(private http:HttpClient) {
// this.baseUrl ='https://anapioficeandfire.com/api';
this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

getPage(Page =1){
  // console.log(`/api/houses?page=${Page}`);
return this.http.get<House[]>(`/api/houses?page=${Page}`);
// return this.http.get(`/api/houses?page=${Page}`).subscribe(response=>{response;console.log(response)});

}

getId(id:number)
{
return this.http.get<House>(`${this.baseUrl}/posts/${id}`);
}

}
