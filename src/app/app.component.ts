import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent {
  paymentForm: FormGroup;
  displayMessage: string;

  constructor(private formBuilder: FormBuilder) {

    /* Declare Reactive Form Group here */
    this.creatForm();

  }
  
  creatForm() {
      this.paymentForm = this.formBuilder.group({
          name: ['', Validators.required],
          cardNumber: ['', Validators.required],
          expirationMonth: ['', Validators.required],
          expirationMo: ['', Validators.required],
          cvv: ['', Validators.required]
      })
  }

  submitForm() {
    /* Change the display message on button click / submit form */
  }
}
