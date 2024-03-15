import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateTicketDTO} from "../../shared/domain/create-ticket-input";
import {Injectable} from "@angular/core";
import {TicketVO} from "../../shared/domain/ticket-vo";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private readonly API: string = 'http://0.0.0.0:3000/tickets'

  constructor(
    private http: HttpClient
  ) { }

  create(ticket: CreateTicketDTO): Observable<CreateTicketDTO> {
    return this.http.post<CreateTicketDTO>(this.API, ticket);
  }

  list(): Observable<TicketVO[]> {
    return this.http.get<TicketVO[]>(this.API);
  }

  delete(id: number): Observable<TicketVO> {
    const url = `${this.API}/${id}`;

    return this.http.delete<TicketVO>(url);
  }


}
