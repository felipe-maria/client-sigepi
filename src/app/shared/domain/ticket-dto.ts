import {TicketStatus} from "./ticket-status";

export interface TicketDto {

  id: number,
  title: string,
  description: string,
  requester: string,
  responsible: string,
  creationDate: string,
  status: TicketStatus

}
