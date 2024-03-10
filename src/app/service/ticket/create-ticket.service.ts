import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateTicketDTO} from "../../shared/domain/create-ticket-input";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CreateTicketService {

  private readonly API: string = 'http://0.0.0.0:3000/tickets'

  constructor(
    private http: HttpClient
  ) { }

  create(ticket: CreateTicketDTO): Observable<CreateTicketDTO> {
    return this.http.post<CreateTicketDTO>(this.API, ticket);
  }


}
