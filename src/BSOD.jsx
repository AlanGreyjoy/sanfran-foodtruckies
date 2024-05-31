import { Button, Card, Stack, Typography } from '@mui/joy'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import IconifyIcon from './_core/global-components/IconifyIcon'

export default function ErrorPage() {
  const error = useRouteError()
  let errorMessage

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = 'Error: ' + error.message + '\n' + error.stack
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    console.error(error)
    errorMessage = 'Unknown error'
  }

  const handleReloadApp = () => {
    window.location.reload()
  }

  return (
    <Stack
      alignItems={'start'}
      p={8}
      gap={2}
      height={'100vh'}
      color={'white'}
      sx={{
        backgroundColor: 'blue'
      }}
    >
      <Typography
        level='h1'
        color='inherit'
        sx={{
          fontSize: '5rem'
        }}
      >
        :(
      </Typography>

      <Typography
        level='h4'
        color='inherit'
      >
        Something went wrong! The good news is that an error report has been sent to our team. We
        will investigate and fix the issue as soon as possible. Please reload the page or try again
        later.
      </Typography>

      <Stack gap={1}>
        <Card
          variant='soft'
          color='primary'
        >
          <Typography
            level='title-md'
            color='inherit'
          >
            Error Details:
          </Typography>

          <Typography
            level='body-md'
            color='inherit'
          >
            {errorMessage}
          </Typography>
        </Card>
      </Stack>

      <Button
        onClick={handleReloadApp}
        startDecorator={<IconifyIcon icon='fluent:reload-16-regular' />}
      >
        Reload App
      </Button>
    </Stack>
  )
}
