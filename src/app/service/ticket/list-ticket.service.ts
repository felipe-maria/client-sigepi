import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TicketVO} from "../../shared/domain/ticket-vo";


@Injectable({
  providedIn: 'root'
})
export class ListTicketService {

  private readonly API: string = 'http://0.0.0.0:3000/tickets'

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<TicketVO[]> {
    return this.http.get<TicketVO[]>(this.API);
  }

}
