import IconifyIcon from '@/_core/global-components/IconifyIcon'
import SimpleTable from '@/_core/global-components/tables/SimpleTable'
import { useGetFoodTrucksQuery } from '@/store/api/sfgov/FoodTrucks'
import { Box, Input, Stack, Typography } from '@mui/joy'

export default function FoodTrucksTable() {
  const {
    data: foodTrucks,
    isLoading: isFoodTrucksLoading,
    isFetching: isFoodTrucksFetching
  } = useGetFoodTrucksQuery({
    query: '$query=select%20*%2C%20%3Aid%20offset%20100%20limit%20100'
  })

  console.log(foodTrucks)

  const columns = [
    {
      field: 'applicant',
      headerName: 'Food Truck Name',
      render: row => {
        return (
          <Typography
            level='body-sm'
            startDecorator={<IconifyIcon icon='mdi:truck-fast' />}
          >
            {row.applicant}
          </Typography>
        )
      }
    }
  ]

  return (
    <Stack gap={1}>
      <Box>
        <Input
          placeholder='Search Food Trucks'
          startDecorator={<IconifyIcon icon='mdi:magnify' />}
        />
      </Box>
      <SimpleTable
        columns={columns}
        rows={foodTrucks || []}
        isLoading={isFoodTrucksLoading || isFoodTrucksFetching}
      />
    </Stack>
  )
}
