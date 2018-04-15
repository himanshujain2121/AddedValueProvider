import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // name: FormControl;
  orderForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.name = new FormControl('test', []);
    this.orderForm = this.fb.group(
      {
        orderId: new FormControl('', [Validators.required, Validators.min(1)]),
        customerName: new FormControl('', [Validators.required, Validators.minLength(4)]),
        email: new FormControl('',[Validators.required,Validators.email]),
        mobile: new FormControl('',[Validators.required]),
        address: this.fb.group(
          {
            addressLine1: new FormControl('',[Validators.required]),
            addressLine2: new FormControl('',[Validators.required]),
            city: new FormControl('',[Validators.required]),
            pin: new FormControl('',[Validators.required])
          }),
        cards: this.fb.array([
          this.buildForm()
        ])
      });
  }

  buildForm() {
    return this.fb.group(
      {
        cardNumber: new FormControl('', [Validators.required]),
        expMonth: new FormControl('', [Validators.min(1), Validators.max(12)]),
        expYear: new FormControl('', [Validators.required,Validators.min(1), Validators.max(12)]),
        cvv: new FormControl('', [Validators.required])
      }
    )
  }

  addCard() {
    const card = this.orderForm.controls['cards'] as FormArray;
    card.push(this.buildForm());
  }

  removeCard(i: number) {
    const card = this.orderForm.controls['cards'] as FormArray;
    card.removeAt(i);
  }

  saveOrder() {
     console.log(this.orderForm.value);
  } 
}
