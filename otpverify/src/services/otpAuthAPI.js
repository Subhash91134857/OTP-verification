import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/";



// Defining services
export const OTPAuthApi = createApi({
    reducerPath: 'OTPAuthApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:8000/pi/user/"
    }),
    endpoints: (builder) => ({
        
    }),
})

export const { useGetAuthOTPByNameQuery } = OTPAuthApi