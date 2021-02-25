import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';
import { SessionStorageService  } from '../sessionStorageService.service';

import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';


import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  mediaSub: Subscription;
  deviceXs: boolean;
  deviceMd:boolean;
  deviceSm:boolean;
  deviceXl:boolean;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup;
  @ViewChild('chipList', { static: true }) chipList;
  GradeArray: any = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
  SubjectsArray: string[] = ["Maths","English","Kannada"];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  posObj:any = {emailId:String,password:String}

  constructor(public fb: FormBuilder, private http: HttpClient,public mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXl = res.mqAlias === "lg" ? true : false;
      this.deviceXs = res.mqAlias === "xs" ? true : false;
      this.deviceMd = res.mqAlias === "md" ? true : false;
      this.deviceSm = res.mqAlias === "sm" ? true : false;
    })
  
    this.reactiveForm()

  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      emailId: ['',Validators.email],
      password: ['',Validators.required]
      
      
      //subjects: [this.SubjectsArray]
    })
  }

  /* Date */
    date(e) {
      var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
      this.myForm.get('dob').setValue(convertDate, {
        onlyself: true
      })
    }

      /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    // if ((value || '').trim() && this.SubjectsArray.length < 5) {
    //   this.SubjectsArray.push({ name: value.trim() })
    // }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  // remove(subject: Subject): void {
  //   const index = this.SubjectsArray.indexOf(subject);
  //   if (index >= 0) {
  //     this.SubjectsArray.splice(index, 1);
  //   }
  // }  
  username: string;
  userid: number;
  initsid:number;
  branchid:number;
  onChange(event){
    console.log(event.checked);
  }
  submitForm() {
    this.posObj.emailId = this.myForm.get('emailId').value;
    this.posObj.password = this.myForm.get('password').value;
    
  if(this.myForm.valid){
    // this.http.post('http://149.129.185.243:8989/login',this.posObj).subscribe(response=>{
    //   console.log(response)
    // })
    
  }
    console.log(this.posObj)
    
   }




}
