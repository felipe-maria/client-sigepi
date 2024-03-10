import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './cancel-ticket-creation-modal.component.html'
})
export class CancelTicketCreationModalComponent {

  private readonly homeRoute: string = '/home'
  constructor(private router: Router) { }

  cancelTicketCreation() {
    this.router.navigate([this.homeRoute])
  }
}
