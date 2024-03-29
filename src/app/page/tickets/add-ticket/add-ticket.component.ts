import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TicketService} from "../../../service/ticket/ticket.service";
import {TicketDto} from "../../../shared/domain/ticket-dto";
import {TicketStatus} from "../../../shared/domain/ticket-status";
import {Routes} from "../../../shared/routes";

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent {

  ticket: TicketDto = {
    id: 0,
    title: '',
    description: '',
    requester: '',
    responsible: '',
    creationDate: new Date(),
    status: TicketStatus.PENDING
  };

  constructor(
    private service: TicketService,
    private router: Router
  ) { }

  createTicket() {
    this.service.create(this.ticket).subscribe(() => {
      this.router.navigate([Routes.CERTIFICATE_LIST_ROUTE]);
    })
  }

}
