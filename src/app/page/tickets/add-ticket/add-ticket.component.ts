import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TicketService} from "../../../service/ticket/ticket.service";
import {TicketDto} from "../../../shared/domain/ticket-dto";

@Component({
  selector: 'add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent {

  private readonly homeRoute: string = '/home'

  ticket: TicketDto = {
    id: 0,
    title: '',
    description: '',
    requester: '',
    responsible: '',
    creationDate: '',
    status: ''
  };

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
