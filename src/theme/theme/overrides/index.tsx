import { Components, Theme } from '@mui/material/styles';
import AppBar from './AppBar';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const componentsOverride = (theme: Theme): Components<Theme> => ({
    ...AppBar(theme),
    ...Card(theme),
    ...Button(theme),
    ...Input(theme),
    ...Select(theme),
});

export default componentsOverride;
