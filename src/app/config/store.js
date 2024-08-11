import { configureStore } from '@reduxjs/toolkit';
import services from '../../features/services/servicesSlice';
import cart from '../../features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        services,
        cart
    },
  })