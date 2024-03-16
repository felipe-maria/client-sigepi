import {Component, OnInit} from "@angular/core";
import {TicketService} from "../../../service/ticket/ticket.service";
import {ActivatedRoute, Router} from "@angular/router";

declare var bootstrap: any; // Declare a variável bootstrap para evitar erros de tipo

@Component({
  selector: 'app-delete-ticket-modal',
  templateUrl: './delete-ticket-modal.component.html'
})
export class DeleteTicketModalComponent implements OnInit {

  private readonly LIST_TICKET_PATH: string = '/tickets/list';

  id: number = 0;

  constructor(
    private service: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.openModal();
  }

  openModal() {
    let myModal = new bootstrap.Modal(document.getElementById('deleteTicketModal'));
    myModal.show();
  }

  deleteTicket() {
    if (this.id) {
      this.service.delete(this.id).subscribe(() => {
        this.router.navigate([this.LIST_TICKET_PATH])
      })
    }
  }

  goBackToList() {
    this.router.navigate([this.LIST_TICKET_PATH])
  }
}
