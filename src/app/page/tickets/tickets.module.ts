import {NgModule} from "@angular/core";
import {AddTicketComponent} from "./add-ticket/add-ticket.component";

@NgModule({
  declarations: [
    AddTicketComponent
  ],
  exports: [
    AddTicketComponent
  ]
})
export class TicketsModule {


}
