import { extendTheme } from '@mui/joy'

export default extendTheme({
  typography: {
    h3: {
      fontWeight: undefined,
      color: '#424242'
    },
    'title-lg': {
      color: '#616161'
    },
    'title-md': {
      color: '#616161',
      fontWeight: 600,
      fontSize: '0.95rem'
    }
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {}
      }
    }
  }
})
