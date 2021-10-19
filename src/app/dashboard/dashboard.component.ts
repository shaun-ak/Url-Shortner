import { Component, OnInit } from '@angular/core';
import { UrlList } from '../modal';
import { ShortnerService } from '../shortner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlList:Array<UrlList> = [];

  constructor(private urlService:ShortnerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.urlService.getAllURLList().subscribe((data) => {
      this.urlList = data;
    })
  }

  redirectTo(URL:string,id:number,i:number){
    this.urlList[i].totalClicks += 1;

      this.urlService.updateURLById(id,this.urlList[i]).subscribe((data2)=>{
        console.log(data2);
      })
    window.open(URL);
  }
}
