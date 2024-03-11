import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ListTicketService} from "../../../service/ticket/list-ticket.service";
import {TicketVO} from "../../../shared/domain/ticket-vo";

@Component({
  selector: 'list-ticket',
  templateUrl: './list-ticket.component.html'
})
export class ListTicketComponent implements OnInit {

  tickets: TicketVO[] = []

  constructor(
    private service: ListTicketService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.service.list().subscribe(tickets => {
      this.tickets = tickets;
    });
  }

  goBack() {
    this.router.navigate(['/home'])
  }


}
