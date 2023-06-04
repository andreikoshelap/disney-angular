import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public ticketForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.ticketForm = this.createTicketForm();
  }

  ngOnInit(): void {
    this.ticketForm = this.createTicketForm();
  }

  createTicketForm(): FormGroup {
    return this.fb.group({
      ticketNumber: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
    });
  }

  submit(): void {
    console.log(this.ticketForm.value);
  }

}
