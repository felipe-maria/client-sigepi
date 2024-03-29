import {NgModule} from "@angular/core";
import {ListCertificateComponent} from "./list-certificate/list-certificate.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {AddCertificateComponent} from "./add-certificate/add-certificate.component";

@NgModule({
  declarations: [
    ListCertificateComponent,
    AddCertificateComponent
  ],
  imports: [
    FormsModule,
    SharedModule
  ],
  exports: [
    ListCertificateComponent,
    AddCertificateComponent
  ]
})
export class CertificatesModule {

}
