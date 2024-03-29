import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Routes} from "../../../shared/routes";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './cancel-ticket-creation-modal.component.html'
})
export class CancelTicketCreationModalComponent {

  constructor(private router: Router) { }

  cancelTicketCreation() {
    this.router.navigate([Routes.HOME_PAGE_ROUTE])
  }
}
