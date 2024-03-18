import {NgModule} from "@angular/core";
import {ListCertificateComponent} from "./list-certificate/list-certificate.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ListCertificateComponent
  ],
  imports: [
    FormsModule,
    SharedModule
  ],
  exports: [
    ListCertificateComponent
  ]
})
export class CertificatesModule {

}
