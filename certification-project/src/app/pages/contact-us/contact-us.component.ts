import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QueryService } from 'src/app/services/query.service';
import { Query } from 'src/app/models/query';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  errorMsg: string;
  constructor(
    private formBuilder: FormBuilder,
    private service: QueryService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  get f() {
    return this.contactForm.controls;
  }
  onSubmit() {
    // console.log("contactForm: " + this.contactForm)
    // console.log("f: " + this.f)
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      // console.log("invalid contact us form")
      return;
    }

    this.service.addQuery(this.contactForm.value).subscribe(
      (data) => {
        // alert('Query submitted successfully.');
        // document.getElementById('successMsg').textContent = "Message sent to Update24x7 staff."
        this.submitted = true;
      },
      (err) => {
        console.log(err);
        this.submitted = false;
        this.errorMsg = err;
      }
    );

    this.contactForm.reset();
    this.submitted = false;
  }
}
