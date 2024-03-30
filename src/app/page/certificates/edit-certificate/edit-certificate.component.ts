import {Component, OnInit} from "@angular/core";
import {CertificateDto} from "../../../shared/domain/certificate-dto";
import {CertificateService} from "../../../service/ticket/certificate.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Routes} from "../../../shared/routes";

@Component({
  selector: 'app-edit-certificate',
  templateUrl: './edit-certificate.component.html'
})
export class EditCertificateComponent implements OnInit {

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
    private service: CertificateService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.service.find(id).subscribe((certificate) => {
      this.certificate = certificate
    });
  }

  updateCertificate() {
    this.service.update(this.certificate).subscribe(()=> {
      this.router.navigate([Routes.CERTIFICATE_LIST_ROUTE])
    });
  }

  goToHomePage() {
    this.router.navigate([Routes.CERTIFICATE_LIST_ROUTE]);
  }
}
