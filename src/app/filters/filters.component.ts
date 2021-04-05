import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { courseAndBranch } from  './courseandbranch.model'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @ViewChild('myCheckbox') myCheckbox;

  name = 'Angular';
  isMasterSel: boolean;
  categoryList: any;
  checkedCategoryList: any;
  mediaSub: Subscription;
  deviceXs: boolean;
  deviceMd: boolean;
  deviceSm: boolean;
  deviceXl: boolean;
  constructor(public mediaObserver: MediaObserver,private http: HttpClient) {
    this.isMasterSel = false;

    this.categoryList = [
      { id: 1, value: 'PHP', isSelected: false },
      { id: 2, value: 'Laravel', isSelected: false },
      { id: 3, value: 'Angular', isSelected: true },
      { id: 4, value: 'React', isSelected: true },
      { id: 5, value: 'Vue', isSelected: true },
      { id: 6, value: 'JQuery', isSelected: false },
      { id: 7, value: 'Javascript', isSelected: false },
    ];


  }
  courseArray: any = ['MBA', 'B.E'];
  checked = false;
  showCheckBox = false;
  costArray: any = ['Free', 'Rs. 0-100', 'Rs. 100-300', 'Rs. 300 & Above']
  branchs: any = ['MBA', 'M-tech', 'B.E', 'B.COM']
  branchRes: any;
  courseRes:any;
  emptyArr =[];
  
  tempPush: Array<courseAndBranch>= [];

  temp: any []=[] ;
  CourseName: any = []
  courseId:any;


  index: number;

  onChange(event) {
    console.log(event.checked);
  }
  setAll(event) {
    //console.log(data)

    console.log(event.source._elementRef.nativeElement.innerText);
    this.CourseName = event.source._elementRef.nativeElement.innerText;
    console.log(event.checked);
    this.showCheckBox = event.checked;
    //console.log(this.index);

  }
  innerCheckBox(event) {
    console.log(event.source._elementRef.nativeElement.innerText);
    console.log(event.checked);
  }
  ngOnInit(): void {
    console.log(this.myCheckbox, 'Value of checkbox');
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
      this.deviceMd = res.mqAlias === "md" ? true : false;
      this.deviceSm = res.mqAlias === "sm" ? true : false;
      this.deviceXl = res.mqAlias === "lg" ? true : false;
    })
    this.http.get('http://149.129.185.243:8989/course?institutionId=21789d2d-2e60-4c49-a3ee-931ac79e45e0')
    .subscribe(res=>{
      //console.log(res)
      this.courseRes = res;
      
      for(let i = 0; i<this.courseRes.length;i++){
        let courseName1; 
        let courseId1 ;
        console.log(this.courseRes[i].courseName)
        courseName1 = this.courseRes[i].courseName;
        courseId1= this.courseRes[i].id;
        this.courseId = courseId1;
        this.http.get('http://149.129.185.243:8989/branchs?courseId='+this.courseId)
        .subscribe(response=>{
        //console.log(response)
        this.branchRes = response;
        let branchArr =[];
        
          for(let j=0;j<this.branchRes.length;j++){
            let branchName1; 
            let branchId1 ;
            branchName1 = this.branchRes[j].branchName;
            branchId1 = this.branchRes[j].id;
            let tempBranch = {
              branchName:branchName1,branchId:branchId1
            }
            branchArr.push(tempBranch)
          }
          let course1 = {courseName:courseName1,courseId:courseId1}
          let tempCourse = {
            course:course1,
            branch:branchArr

          }
          this.emptyArr.push(tempCourse)
          //this.
       
      });

      
        
        
      }  
      console.log(this.emptyArr)
      console.log(this.emptyArr)
    


      
      
    })
    

  }

  checkUncheckAll() {
    for (var i = 0; i < this.categoryList.length; i++) {
      this.categoryList[i].isSelected = this.isMasterSel;
    }

  }

  isAllSelected() {
    this.isMasterSel = this.categoryList.every(function (item: any) {
      return item.isSelected == true;
    })

  }


}
