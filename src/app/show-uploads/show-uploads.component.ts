import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-uploads',
  templateUrl: './show-uploads.component.html',
  styleUrls: ['./show-uploads.component.css']
})
export class ShowUploadsComponent implements OnInit {
  costArray : any = ['suresh','yesh','jaya']
  constructor() { }

  ngOnInit(): void {
  }

}
