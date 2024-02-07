import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonDetailService } from '../person-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  personForm !: FormGroup;
  formData : any;
  url : any;
  id : any;


  @Input() personDetail : any;

  constructor(private fb : FormBuilder, private personService : PersonDetailService, private router: Router) { }

  ngOnInit(): void {
    this.url = (this.router.url).split("/")
    this.id = this.url[2];

    this.personForm = this.fb.group({
      name : ['',[Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      dob : ['',[Validators.required]],
      country : ['',[Validators.required]],
      avatar : ['',[Validators.required]],
    })
  }

  get personFormControl(){
    return this.personForm.controls;
  }

  postPersonDetail(){
    this.formData = this.personForm.value;
    this.personService.addPerson(this.formData).subscribe(res=>{
      console.log("Data is uploaded successfully", res)
    })
    console.log(this.personForm.value)
  }

  editPersonDetail(){
    this.formData = this.personForm.value;
    this.personService.editPerson(this.formData,this.id).subscribe(res=>{
      console.log("Data is uploaded successfully",res);
    })
    
  }

  submitForm(){
    if(!this.id){
      this.postPersonDetail();
    }
    else{
      this.editPersonDetail();
    }
  }

}
