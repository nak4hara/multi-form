import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PersonalInfo from './pages/PersonalInfo/index.jsx'
import SelectPlan from './pages/SelectPlan'
import AddOns from './pages/Add-ons/index.jsx'
import Summary from './pages/Summary'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element:<PersonalInfo />,
      },
      {
        path: "/select-plan",
        element: <SelectPlan />
      },
      {
        path: "/add-ons",
        element: <AddOns />
      },
      {
        path: "/summary",
        element: <Summary />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
