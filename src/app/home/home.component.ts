import { Component, OnInit } from '@angular/core';
import { House } from '../type/house';
import { DataService } from '../service/data.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pageNum =1;
houses:House;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPages();
  }
  getPages() : void {
     this.dataService.getId(this.pageNum).subscribe(response =>{
      console.log(response) ;
      this.houses = response;
      response});

};

getPrevious():void
{
  if(this.pageNum !=1)
  {
    this.pageNum--;
  }
  this.getPages();

}


getNext():void{
  this.pageNum++;
  this.getPages();

}
}
