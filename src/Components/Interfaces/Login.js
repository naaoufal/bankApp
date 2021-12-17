import { Box, TextField, Button, Container, CssBaseline, Avatar, Typography, ThemeProvider, createTheme, Grid } from '@material-ui/core';
import * as React from 'react';

const Login = () => {

    const theme = createTheme();

    return(
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    Icon
                </Avatar> */}

                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>

                <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            autoComplete="given-email"
                            name="Email"
                            id="email"
                            label="Email"
                            />
                        </Grid>
                    </Grid>
                </Box>

                {/* <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <Button variant="contained">Default</Button> */}
            </Box>
        </Container>
        </ThemeProvider>
    )
}

export default Login