import React, { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export default function AuthPage() {
    const RootStyle: any = styled('div')({
        display: 'flex',
        flexFlow: 'column',
        minHeight: '100%',
        overflow: 'hidden',
    });

    const MainStyle: any = styled('div')(({ theme }) => ({
        flexGrow: 1,
        overflow: 'hidden',
        minHeight: '100%',
        paddingTop: 0,
        paddingBottom: 0,
        [theme.breakpoints.up('lg')]: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
        },
    }));

    return (
        <>
            <RootStyle>
                <MainStyle>
                    <Outlet />
                </MainStyle>
            </RootStyle>
        </>
    );
}
