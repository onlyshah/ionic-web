import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent  implements OnInit {
  contactusForm !: FormGroup;
  isSubmitted :boolean = false
  constructor(private fb: FormBuilder,  
    private spinner: NgxSpinnerService,
    private toastr : ToastrService
    ) { }

  ngOnInit() {
    this.contactusForm = this.fb.group({
     name:['',[Validators.required]],
     email:['',[Validators.required]],
     subject:['',[Validators.required]],
     message:['',[Validators.required]]
     
    })
  }
  get Error(){
    return this.contactusForm.controls
  }
  onSubmit(){
    this.isSubmitted = true;
    console.log(this.contactusForm.value)
    if (this.contactusForm.invalid) {
      return;
    }
   // this.spinner.show()
  if(this.contactusForm.value != null){
    this.spinner.hide()
    this.toastr.success("Greate submit data")

  }
  else{
    this.toastr.error('SomeThing gone wrong !')
  }
  }
}
