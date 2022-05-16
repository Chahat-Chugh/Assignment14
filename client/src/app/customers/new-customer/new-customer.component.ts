import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { customer } from 'src/app/globals';

@Component({
  selector: 'new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  @Output() onSubmit = new EventEmitter();
  ngOnInit(): void {
  }

  submit(form: NgForm)
  {
    const cust: customer = form.value;
    cust.created_on = new Date();
    cust.modified_on = new Date();
  /*   const body = {
      "name": cust.name,
      "middleName": user.middlename,
      "lastname": user.lastname,
      "email": user.email,
      "phone": user.phone,
      "address": user.address,
      "role": user.role,
      "customerId": parseInt(user.customer as string),
      "created_on": new Date(),
      "modified_on": new Date()
      }; */
    
    this.onSubmit.emit(cust);
  }

}
