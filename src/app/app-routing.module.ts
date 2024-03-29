import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {AddTicketComponent} from "./page/tickets/add-ticket/add-ticket.component";
import {EditTicketComponent} from "./page/tickets/edit-ticket/edit-ticket.component";
import {DeleteTicketModalComponent} from "./page/tickets/delete-ticket-modal/delete-ticket-modal.component";
import {ListCertificateComponent} from "./page/certificates/list-certificate/list-certificate.component";
import {ListTicketComponent} from "./page/tickets/list-ticket/list-ticket.component";
import {AddCertificateComponent} from "./page/certificates/add-certificate/add-certificate.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tickets/add',
    component: AddTicketComponent
  },
  {
    path: 'tickets/list',
    component: ListTicketComponent
  },
  {
    path: 'tickets/delete/:id',
    component: DeleteTicketModalComponent
  },
  {
    path: 'tickets/edit/:id',
    component: EditTicketComponent
  },
  {
    path: 'certificates/list',
    component: ListCertificateComponent
  },
  {
    path: 'certificates/add',
    component: AddCertificateComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
