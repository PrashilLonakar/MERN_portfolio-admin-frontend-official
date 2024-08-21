import { styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

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

export default function PostLoginLayout() {
    return (
        <RootStyle>
            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}
