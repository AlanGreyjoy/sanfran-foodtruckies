import { Stack, Typography } from '@mui/joy'
import FoodTrucksMap from '@/_core/components/home/FoodTrucksMap'
import FoodTrucksList from '@/_core/components/home/FoodTrucksList'

export default function Home() {
  return (
    <Stack px={2}>
      <Stack gap={2}>
        {/* Title */}
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Typography level='h1'>SanFran FoodTruckies 🚚</Typography>
          <Typography>Search and find your favorite food trucks in San Francisco!</Typography>
        </Stack>

        {/* Map */}
        <Stack
          direction={'row'}
          gap={2}
        >
          <FoodTrucksList />
          <FoodTrucksMap />
        </Stack>
      </Stack>
    </Stack>
  )
}
