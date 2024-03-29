import {Component} from "@angular/core";
import {CertificateDto} from "../../../shared/domain/certificate-dto";
import {Router} from "@angular/router";
import {CertificateService} from "../../../service/ticket/certificate.service";
import {Routes} from "../../../shared/routes";

@Component({
  selector: "app-add-certificate",
  templateUrl: './add-certificate.component.html'
})
export class AddCertificateComponent {

  certificate: CertificateDto = {
    id: 0,
    owner: '',
    segment: 'title',
    category: 'title',
    media: 'title',
    issuer: 'title',
    expeditionDate: new Date(),
    dueDate: new Date(),
    remainingDays: 0
  }

  constructor(
    private router: Router,
    private service: CertificateService
    ) { }

  createCertificate() {
    this.service.create(this.certificate).subscribe(() => {
      this.router.navigate([ Routes.CERTIFICATE_LIST_ROUTE ]);
    })
  }

  goToHomePage() {
    this.router.navigate([ Routes.HOME_PAGE_ROUTE ]);
  }
}
