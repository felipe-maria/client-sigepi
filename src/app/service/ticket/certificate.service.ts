import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CertificateDto} from "../../shared/domain/certificate-dto";

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private readonly API: string = 'http://0.0.0.0:3000/certificates';

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<CertificateDto[]> {
      return this.http.get<CertificateDto[]>(this.API);
  }

}
