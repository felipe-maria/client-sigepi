import {Component, OnInit} from "@angular/core";
import {TicketDto} from "../../../shared/domain/ticket-dto";
import {TicketService} from "../../../service/ticket/ticket.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html'
})
export class EditTicketComponent implements OnInit{

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.service.find(parseInt(id!)).subscribe(ticket => {
        this.ticket = ticket;
      });
  }

  updateTicket() {
    this.service.update(this.ticket).subscribe(() => {
      this.router.navigate(['/tickets/list'])
    })
  }

}
