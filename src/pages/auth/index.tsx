import React, { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import LoginPage from './login';

export default function AuthPage() {
    return (
        <>
            <LoginPage></LoginPage>
        </>
    );
}
