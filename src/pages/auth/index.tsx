import React, { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import LoginPage from './login';
import Grid from '@mui/material/Grid';

export default function AuthPage() {
    return (
        <>
            <Grid
                container
                spacing={2}
                sx={{ height: '100vh', width: '100%', position: 'relative' }}
            >
                <Grid item xs={12}>
                    <img
                        src="/static/illustrations/wallpaper1.jpg"
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            width: '100%',
                            height: '100%',
                        }}
                        alt="auth-wallpaper"
                    />
                </Grid>
            </Grid>
        </>
    );
}
