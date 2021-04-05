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
  posObj:any = {bookType:String,
    name:String,
    authorName:String,
    pageCount:Number,
    bookCondition:String,
    publisher:String,
    edition:String,
    userId:String,
    branchId:String,
    cost:Number,
    subject:String}
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

  constructor(public fb: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      bookType: [''],
      name: [''],
      authorName: [''],
      pageCount: [''],      
      bookCondition: [''],      
      publisher: [''],
      edition: [''],
      cost: [''],
      subject: [''],
      imageUrl: ['']
    })
  }
  var : string
  Logo:string;
//   {
//     "bookType":"TEXT_BOOKS",
//     "name":"Operating Systems",
// "author":"yeshwant ln",
// "pageCount":123,
// "quality":"GOOD",
// "publisher":"Mc-graw-hill",
// "edition":"2nd edition",
// "userId":"cc8a1b23-d5ae-4547-a170-3ed22bf00bfe",
// "branchId":"b686f1c5-db75-49db-953e-f732764a58b5",
// "cost":0.00,
// "subject":"Operating Systems"
// }

 handleUpload(e):void{
    this.Logo = e.target.value;
   console.log(this.Logo);
 }
  submitForm() {
    console.log(this.myForm.get('imageUrl').value);

      console.log(this.myForm.value)
      this.posObj.bookType = this.myForm.get('bookType').value;
      this.posObj.name = this.myForm.get('name').value;
      this.posObj.authorName = this.myForm.get('authorName').value;
      this.posObj.pageCount = this.myForm.get('pageCount').value;
      this.posObj.bookCondition = this.myForm.get('bookCondition').value;
      this.posObj.publisher = this.myForm.get('publisher').value;
      this.posObj.edition = this.myForm.get('edition').value;
      this.posObj.userId = "cc8a1b23-d5ae-4547-a170-3ed22bf00bfe";
      this.posObj.branchId ="b686f1c5-db75-49db-953e-f732764a58b5";
      this.posObj.cost = this.myForm.get('cost').value;
     // this.posObj.cost = this.myForm.get('cost').value;
      this.posObj.subject = this.myForm.get('subject').value;
      //this.posObj.imageUrl = this.myForm.get('imageUrl').value;


      // console.log(this.posObj.bookType)
      // console.log(this.posObj.name)
      // console.log(this.posObj.bookCondition)
      // console.log(this.posObj.publisher)
      // console.log(this.posObj.edition)
      // console.log(this.posObj.authorName)
      // console.log(this.posObj.name)
      // console.log(this.posObj.pageCount)
      // console.log(this.posObj.cost)

      // if(this.myForm.valid){
      //  console.log("Hii")
      //   this.http.post('http://149.129.185.243:8989/book',this.posObj)
      //   .subscribe(response=>{
      //     console.log(response)
      //   });
      // }
     

     }
  

}
