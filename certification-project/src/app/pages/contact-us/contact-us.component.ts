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
  constructor(
    private formBuilder: FormBuilder,
    private service: QueryService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      query: ['', Validators.required],
    });
  }
  get f() {
    return this.contactForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.service.addQuery(this.contactForm.value).subscribe(
      (data) => {
        alert('Query submitted successfully.');
      },
      (err) => {
        console.log(err);
      }
    );

    this.contactForm.reset();
    this.submitted = false;
  }
}
