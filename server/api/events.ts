import { setResponseHeader, defineEventHandler } from 'h3'

let clients: any[] = [] // Array to store connected SSE clients
let latestBackendData = 'Waiting for backend check...'

export default defineEventHandler(async (event) => {
  // Set the headers for SSE
  setResponseHeader(event, 'Content-Type', 'text/event-stream')
  setResponseHeader(event, 'Cache-Control', 'no-cache')
  setResponseHeader(event, 'Connection', 'keep-alive')

  const eventStream = createEventStream(event)

  // Send an initial message to confirm the connection is established
  eventStream.push(`data: Initial connection established @ ${new Date().toLocaleTimeString()}\n\n`)

  // Immediately send the latest backend data to the newly connected client
  eventStream.push(`data: Backend check result @ ${new Date().toLocaleTimeString()}: ${latestBackendData}\n\n`)

  // Add the client to the list of connected clients
  clients.push(eventStream)

  // Handle client disconnection
  eventStream.onClosed(() => {
    clients = clients.filter((client) => client !== eventStream) // Remove the client when it disconnects
  })

  return eventStream.send()
})

// Function to update the backend data and notify all connected clients
export function updateLatestBackendData(data: string) {
  latestBackendData = data

  // Notify all connected clients about the new data
  clients.forEach((client) => {
    client.push(`data: Backend check result @ ${new Date().toLocaleTimeString()}: ${latestBackendData}\n\n`)
  })
}
