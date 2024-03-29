import {Component} from "@angular/core";
import {CertificateDto} from "../../../shared/domain/certificate-dto";
import {Router} from "@angular/router";
import {CertificateService} from "../../../service/ticket/certificate.service";

@Component({
  selector: "app-add-certificate",
  templateUrl: './add-certificate.component.html'
})
export class AddCertificateComponent {

  private readonly listCertificateRoute: string = '/certificates/list'

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
      this.router.navigate([this.listCertificateRoute]);
    })
  }
}
