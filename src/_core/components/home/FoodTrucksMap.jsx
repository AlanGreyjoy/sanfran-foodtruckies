import { Card, Stack } from '@mui/joy'
import { APIProvider, Map } from '@vis.gl/react-google-maps'

const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

export default function FoodTrucksMap() {
  return (
    <Stack flex={1}>
      <Card variant='soft'>
        <APIProvider apiKey={key}>
          <Map
            style={{ width: '100%', height: 'calc(100vh - 10rem' }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          />
        </APIProvider>
      </Card>
    </Stack>
  )
}
