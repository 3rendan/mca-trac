import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../RootLayout'
import ErrorPage from './ErrorPage'
import SubscriptionForm from '../components/form/SubscriptionForm'
import CarriageService from '../components/CarriageService'
import FormGrid from '../components/FormGrid'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <CarriageService />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/form',
        element: <FormGrid />
      }
    ]
  }
])
export default router
