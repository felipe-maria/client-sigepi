import {NgModule} from "@angular/core";
import {ListCertificateComponent} from "./list-certificate/list-certificate.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {AddCertificateComponent} from "./add-certificate/add-certificate.component";
import {DeleteCertificateModalComponent} from "./delete-certificate-modal/delete-certificate-modal.component";

@NgModule({
  declarations: [
    ListCertificateComponent,
    AddCertificateComponent,
    DeleteCertificateModalComponent
  ],
  imports: [
    FormsModule,
    SharedModule
  ],
  exports: [
    ListCertificateComponent,
    AddCertificateComponent,
    DeleteCertificateModalComponent
  ]
})
export class CertificatesModule {

}
