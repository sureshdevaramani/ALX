import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(public mediaObserver: MediaObserver) { }
  courseArray: any = ['MBA','B.E'];
  checked = false;
  mediaSub: Subscription;
  deviceXs: boolean;
  deviceMd:boolean;
  deviceSm:boolean;
  deviceXl:boolean;
  costArray : any=['Free','Rs. 0-100','Rs. 100-300','Rs. 300 & Above']
  onChange(event){
    console.log(event.checked);
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXl = res.mqAlias === "lg" ? true : false;
      this.deviceXs = res.mqAlias === "xs" ? true : false;
      this.deviceMd = res.mqAlias === "md" ? true : false;
      this.deviceSm = res.mqAlias === "sm" ? true : false;
    })
  }

}
