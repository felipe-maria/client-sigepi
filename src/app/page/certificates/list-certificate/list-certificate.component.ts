import {Component, OnInit} from "@angular/core";
import {CertificateDto} from "../../../shared/domain/certificate-dto";
import {Router} from "@angular/router";
import {CertificateService} from "../../../service/ticket/certificate.service";
import {Routes} from "../../../shared/routes";

@Component({
  selector: 'app-list-certificate',
  templateUrl: './list-certificate.component.html'
})
export class ListCertificateComponent implements OnInit {

  certificates: CertificateDto[] = [];

  constructor(
    private service: CertificateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.list().subscribe(certificates => {
      this.certificates = certificates;
    });
  }

  goBack() {
    this.router.navigate([Routes.HOME_PAGE_ROUTE])
  }
}
