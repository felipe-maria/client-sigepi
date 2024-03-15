import {Component} from "@angular/core";

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html'
})
export class EditTicketComponent {

  ticket = {
    title: '',
    description: ''
  };

  updateTicket() {

  }
}
