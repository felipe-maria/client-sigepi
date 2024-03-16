import {Component, OnInit} from "@angular/core";
import {TicketDto} from "../../../shared/domain/ticket-dto";
import {TicketService} from "../../../service/ticket/ticket.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TicketStatus} from "../../../shared/domain/ticket-status";

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html'
})
export class EditTicketComponent implements OnInit{

  private readonly LIST_URL: string = '/tickets/list';

  ticket: TicketDto = {
    id: 0,
    title: '',
    description: '',
    requester: '',
    responsible: '',
    creationDate: '',
    status: TicketStatus.PENDING
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
      this.router.navigate([this.LIST_URL]);
    })
  }

  goBack() {
    this.router.navigate([this.LIST_URL]);
  }
}
