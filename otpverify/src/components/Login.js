import React from 'react'
import { Box, Typography, TextField, Alert, Button, Papper } from '@mui/material'
const Login = () => {
    return (
        <>
            <Box display='flex' justifyContent="center" sx={{ backgroundColor: 'error.light', padding: 2 }}>
                <Typography variant='h4' component='div' sx={{ fontweight: 'bold', color: 'white' }}>
                    OTP verification
                </Typography>

            </Box>
            <Box component="form" sx={{
                p: 3, backgroundColor: 'error.light', display:"flex",justifyContent:'center'
            }}>
                

            </Box>
        </>
    )
}

export default Login