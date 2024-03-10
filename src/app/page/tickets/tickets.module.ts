import {NgModule} from "@angular/core";
import {AddTicketComponent} from "./add-ticket/add-ticket.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AddTicketComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        AddTicketComponent
    ]
})
export class TicketsModule {


}
