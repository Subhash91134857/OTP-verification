import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import { OTPAuthApi } from '../services/otpAuthAPI';


export const store = configureStore({
    reducer: {
      [OTPAuthApi.reducerPath]: OTPAuthApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(OTPAuthApi.middleware),
    
});
setupListeners(store.dispatch)