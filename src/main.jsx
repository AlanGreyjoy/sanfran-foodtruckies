import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from 'src/store'
import { Provider } from 'react-redux'
import './index.css'
import { CssVarsProvider } from '@mui/joy'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ThemeOverrides from './_core/layouts/ThemeOverrides.js'
import BSOD from './BSOD'

import Home from './routes/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <BSOD />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider theme={ThemeOverrides}>
        <RouterProvider router={router} />
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>
)
