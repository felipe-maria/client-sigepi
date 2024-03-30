import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CertificateService} from "../../../service/ticket/certificate.service";
import {Routes} from "../../../shared/routes";

declare var bootstrap: any;

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-certificate-modal.component.html'
})
export class DeleteCertificateModalComponent implements OnInit {

  id: number = 0;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CertificateService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.openModal();
  }

  deleteCertificate() {
    if (this.id) {
      this.service.delete(this.id).subscribe(()=> {
        this.router.navigate([Routes.CERTIFICATE_LIST_ROUTE])
      });
    }
  }

  goBackToList() {
    this.router.navigate([Routes.CERTIFICATE_LIST_ROUTE])
  }

  private openModal() {
    let myModal = new bootstrap.Modal(document.getElementById('deleteCertificateModal'));
    myModal.show();
  }
}
