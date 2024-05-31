import { useGetFoodTrucksQuery } from '@/store/api/sfgov/FoodTrucks'
import { Card, Stack } from '@mui/joy'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

import FoodTruckMapMarkers from './FoodTuckMapMarkers'

const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

export default function FoodTrucksMap() {
  const {
    data: foodTrucks,
    isLoading: isFoodTrucksLoading,
    isFetching: isFoodTrucksFetching
  } = useGetFoodTrucksQuery({
    query: '$query=select%20*%2C%20%3Aid%20offset%20100%20limit%20100'
  })

  return (
    <Stack flex={1}>
      <Card
        variant='soft'
        sx={{
          p: 0,
          overflow: 'hidden'
        }}
      >
        <APIProvider apiKey={key}>
          <Map
            mapId='foodtrucks-map'
            style={{ width: '100%', height: 'calc(100vh - 10rem' }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          >
            <FoodTruckMapMarkers foodTrucks={foodTrucks} />
          </Map>
        </APIProvider>
      </Card>
    </Stack>
  )
}
