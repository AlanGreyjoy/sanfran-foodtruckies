import IconifyIcon from '@/_core/global-components/IconifyIcon'
import { useGetFoodTrucksQuery } from '@/store/api/sfgov/FoodTrucks'
import {
  Box,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Stack,
  Typography
} from '@mui/joy'

export default function FoodTrucksList(props) {
  const {
    data: foodTrucks,
    isLoading: isFoodTrucksLoading,
    isFetching: isFoodTrucksFetching
  } = useGetFoodTrucksQuery({
    query: '$query=select%20*%2C%20%3Aid%20offset%20100%20limit%20100'
  })

  return (
    <Stack>
      <Input placeholder='Search Food Trucks' />

      <Box>
        <List
          sx={{
            width: 400,
            height: 'calc(100vh - 10rem)',
            overflow: 'hidden',
            overflowY: 'auto'
          }}
        >
          {isFoodTrucksLoading && <ListItem>Loading...</ListItem>}

          {foodTrucks?.map(foodTruck => (
            <ListItem key={foodTruck.objectid}>
              <ListItemButton>
                <ListItemDecorator
                  sx={{
                    fontSize: '1.5rem'
                  }}
                >
                  🚚
                </ListItemDecorator>
                <ListItemContent>
                  <Typography level='body-sm'>{foodTruck.applicant}</Typography>
                  <Stack
                    direction={'row'}
                    gap={1}
                  >
                    <Typography level='body-xs'>Permit status:</Typography>
                    <Typography level='body-xs'>{foodTruck.status}</Typography>
                  </Stack>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Stack>
  )
}
