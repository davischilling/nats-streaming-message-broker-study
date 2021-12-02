import { randomBytes } from 'crypto'
import nats from 'node-nats-streaming'
import { TicketCreatedListener } from './listeners/ticket-created'

console.clear()

const client = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222'
})

client.on('connect', () => {
  console.log('Listener connected to NATS')

  client.on('close', () => {
    console.log('NATS connection closed')
    process.exit()
  })

  new TicketCreatedListener(client).listen()
})

process.on('SIGINT', () => client.close())
process.on('SIGTERM', () => client.close())



