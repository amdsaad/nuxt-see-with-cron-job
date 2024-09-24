import { defineCronHandler } from '#nuxt/cron'
import { checkBackend } from '../utils/backendCheck'
import { updateLatestBackendData } from '../api/events' // Import the function to update clients

// Correct usage of defineCronHandler with two arguments
export default defineCronHandler('everyMinute', async () => {
  const result = await checkBackend()
  console.log(`Cron job result: ${result}`)
  updateLatestBackendData(result) // Update the latest data and push it to all connected SSE clients
})
