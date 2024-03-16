import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {TicketDto} from "../../../shared/domain/ticket-dto";
import {TicketService} from "../../../service/ticket/ticket.service";
import {TicketStatus} from "../../../shared/domain/ticket-status";

@Component({
  selector: 'list-ticket',
  templateUrl: './list-ticket.component.html'
})
export class ListTicketComponent implements OnInit {

  tickets: TicketDto[] = []

  constructor(
    private service: TicketService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.list().subscribe(tickets => {
      this.tickets = tickets;
    });
  }

  goBack() {
    this.router.navigate(['/home'])
  }

  getFunctionalNameOfEnum() {
    console.log(TicketStatus.PENDING);
  }

}
