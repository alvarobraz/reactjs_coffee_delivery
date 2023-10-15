import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'

import { Home } from './pages/Home'
import { ConfirmOrder } from './pages/ConfirmOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
      </Route>
    </Routes>
  )
}
