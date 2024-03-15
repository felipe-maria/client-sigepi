import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CreateTicketDTO} from "../../../shared/domain/create-ticket-input";
import {TicketService} from "../../../service/ticket/ticket.service";

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
    private service: TicketService,
    private router: Router
  ) { }

  createTicket() {
    this.service.create(this.ticket).subscribe(() => {
      this.router.navigate([this.homeRoute]);
    })
  }

}
