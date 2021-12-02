import { TicketCreatedEvent } from './../protocols/ticket-created'
import { Publisher } from "../configs/base-publisher"
import { Subjects } from '../configs/subjects'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated
}
