import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {TicketDto} from "../../shared/domain/ticket-dto";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private readonly API: string = 'http://0.0.0.0:3000/tickets'

  constructor(
    private http: HttpClient
  ) { }

  create(ticket: TicketDto): Observable<TicketDto> {
    return this.http.post<TicketDto>(this.API, ticket);
  }

  list(): Observable<TicketDto[]> {
    return this.http.get<TicketDto[]>(this.API);
  }

  delete(id: number): Observable<TicketDto> {
    const url = `${this.API}/${id}`;

    return this.http.delete<TicketDto>(url);
  }

  find(id: number): Observable<TicketDto> {
    const url = `${this.API}/${id}`;

    return this.http.get<TicketDto>(url);
  }

  update(ticket: TicketDto): Observable<TicketDto> {
    const url = `${this.API}/${ticket.id}`;

    return this.http.put<TicketDto>(url, ticket);
  }

}
