import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CreateTicketDTO} from "../../../shared/domain/create-ticket-input";
import {CreateTicketService} from "../../../service/ticket/create-ticket.service";

@Component({
  selector: 'add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent {

  private readonly homeRoute: string = '/home'

  ticket: CreateTicketDTO = {
    title: '',
    description: ''
  }

  constructor(
    private service: CreateTicketService,
    private router: Router
  ) { }

  createTicket() {
    this.service.create(this.ticket).subscribe(() => {
      this.router.navigate([this.homeRoute]);
    })
  }

}
