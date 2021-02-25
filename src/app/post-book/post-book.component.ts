import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-book',
  templateUrl: './post-book.component.html',
  styleUrls: ['./post-book.component.css']
})
export class PostBookComponent implements OnInit {
  myForm: FormGroup;
  selectedValue: string;
  selectedCar: string;
  posObj:any = {bookType:String,name:String,authorName:String,pageCount:Number,bookCondition:String,
    publisher:String,edition:String,userId:String,branchId:String,cost:Number,subject:String,imageUrl:String}
    name = 'Angular';
    fileToUpload: any;
    imageUrl: any;
    handleFileInput(file: FileList) {
      this.fileToUpload = file.item(0);
  
      //Show image preview
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  
  bookTypeArr = ['TEXT_BOOKS',
    'XEROX_TEXT_BOOK',
    'XEROX_NOTES',
    'HAND_WRITTEN_OWN',
    'HAND_WRITTEN_FACULTY',
    'OTHERS',
    ]    
    bookConditionArr = ['POOR',
      'GOOD',
      'BETTER',
      'BEST']

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      bookType: ['',Validators.required],
      name: ['',Validators.required],
      authorName: ['',Validators.required],
      pageCount: ['',Validators.required],      
      bookCondition: ['',Validators.required],      
      publisher: ['',Validators.required],
      edition: ['',Validators.required],
      cost: ['',Validators.required],
      subject: ['',Validators.required],
      imageUrl: ['',Validators.required]
    })
  }
  var : string
  submitForm() {

      console.log(this.myForm.value)
      this.posObj.bookType = this.myForm.get('bookType').value;
      this.posObj.name = this.myForm.get('name').value;
      this.posObj.authorName = this.myForm.get('authorName').value;
      this.posObj.pageCount = this.myForm.get('pageCount').value;
      this.posObj.bookCondition = this.myForm.get('bookCondition').value;
      this.posObj.publisher = this.myForm.get('publisher').value;
      this.posObj.edition = this.myForm.get('edition').value;
      this.posObj.userId = this.myForm.get('bookType').value;
      this.posObj.branchId = this.myForm.get('bookType').value;
      this.posObj.cost = this.myForm.get('cost').value;
     // this.posObj.cost = this.myForm.get('cost').value;
      this.posObj.subject = this.myForm.get('subject').value;
      //this.posObj.imageUrl = this.myForm.get('imageUrl').value;


      console.log(this.posObj.bookType)
      console.log(this.posObj.name)
      console.log(this.posObj.bookCondition)
      console.log(this.posObj.publisher)
      console.log(this.posObj.edition)
      console.log(this.posObj.authorName)
      console.log(this.posObj.name)
      console.log(this.posObj.pageCount)
      console.log(this.posObj.cost)
      

     

     }
  

}
