import { Component,OnInit,ElementRef, ViewChild, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 
  realName: string;
  registerForm: FormGroup;
  oppoSuits: any;
  selectedItem:number;
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  institutions: any;
  institute: string[] = [];
  id: string[] = [];
  instituteId:any;
  var : any;
  datePipeString : string;
  selectedItem1: number;
  selectedInstitute: any;
  myForm: FormGroup;
  constructor( private http: HttpClient,private datePipe: DatePipe,public fb: FormBuilder) { }
  
  
  
  onSubmit() {
    //this.registerForm.setValue({ ...this.registerForm, dropDown1:})

    this.var = this.registerForm.get('dropDown1').value;

    for (let i = 0; i < this.institutions.data.length; i++)
    {
      if(this.var == this.institutions.data[i].name)
      {

        this.instituteId = this.institutions.data[i].id;
      }

    }
    console.log(this.var);
    console.log(this.instituteId);
     
    this.registerForm.patchValue({dropDown1:this.instituteId});
    console.log(this.registerForm);

  }
  reset()
  {
    this.registerForm.reset();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      emailId: ['',Validators.email],
      password: ['',Validators.required]
      
      
      //subjects: [this.SubjectsArray]
    })
  }

  // fetchID() {



  //   // for (let i = 0; i < this.id.length; i++) {
  //   //   if (this.selectedLevel == i) {
  //   //     this.i = this.id[i];
  //   //   }
  //   // }
  //   // console.log(this.i);
  // }
  //https://cors-anywhere.herokuapp.com/
  changeCity(e) {
    console.log(e.value);
  }
  changeCity1(e) {
    console.log(e.value);
  }

  ngOnInit(){
    this.datePipeString = this.datePipe.transform(Date.now(),'yyyy-MM-dd');
    console.log(this.datePipeString);

    //     this.http.get('https://cors-anywhere.herokuapp.com/http://149.129.185.243:8989/course')

    // .subscribe(response=>{
    //   // console.log(response);
    //   this.oppoSuits = response;

    // });
    // this.http.get('https://cors-anywhere.herokuapp.com/http://149.129.185.243:8989/institution')
    // .subscribe(response =>{
    //   this.institutions = response;
    //     console.log(this.institutions);
    //     for (let i = 0; i < this.institutions.data.length; i++) {

    //       this.institute.push(this.institutions.data[i].name);
    //       this.id.push(this.institutions.data[i].id);
    //     }

    //   console.log(response);
    // })
    // this.registerForm = new FormGroup({
    //   'name': new FormControl(null, Validators.required),
    //   'address': new FormControl(null, Validators.required),
    //   'dateOfBirth': new FormControl(null, Validators.required),
    //   'contactNumber': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, Validators.required),
      
    //   'password': new FormControl(null, Validators.required),
    //   'dropDown': new FormControl(null, Validators.required),
    //   'dropDown1': new FormControl(null, Validators.required)
      
    // });
  

  }
  updateAllComplete(){
    console.log("He clicked me!!!!!");
  }
  submitForm(){
      if(this.myForm.valid){

      console.log(this.myForm.value)
    }
  }

}

