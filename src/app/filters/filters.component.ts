import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  name = 'Angular';
  isMasterSel:boolean;
  categoryList:any;
  checkedCategoryList:any;
  mediaSub: Subscription;
  deviceXs: boolean;
  deviceMd:boolean;
  deviceSm:boolean;
  deviceXl:boolean;
  constructor(public mediaObserver: MediaObserver) { 
    this.isMasterSel = false;
  
      this.categoryList = [
        {id:1, value:'PHP',isSelected:false},
        {id:2,value:'Laravel',isSelected:false},
        {id:3,value:'Angular',isSelected:true},
        {id:4,value:'React',isSelected:true},
        {id:5,value:'Vue',isSelected:true},
        {id:6,value:'JQuery',isSelected:false},
        {id:7,value:'Javascript',isSelected:false},
      ];
  
      
  }
  courseArray: any = ['MBA','B.E'];
  checked = false;
  costArray : any=['Free','Rs. 0-100','Rs. 100-300','Rs. 300 & Above']
  onChange(event){
    console.log(event.checked);
  }
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
      this.deviceMd = res.mqAlias === "md" ? true : false;
      this.deviceSm = res.mqAlias === "sm" ? true : false;
      this.deviceXl = res.mqAlias === "lg" ? true : false;
    })
  }

  checkUncheckAll() {
    for (var i = 0; i < this.categoryList.length; i++) {
      this.categoryList[i].isSelected = this.isMasterSel;
    }
   
  }
   
  isAllSelected() {
    this.isMasterSel = this.categoryList.every(function(item:any) {
        return item.isSelected == true;
      })
    
  }
  
  
}
