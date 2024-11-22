import '../App.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { getByTitle } from '@testing-library/react';
import { Divider } from '@mui/material';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Navbar() {
    const pages = [
        { title: 'Inicio', path: '/'},
        { title: 'Servicios'},
        { title: 'Acerca de nosotros', path: '/nosotros'},
        { title: 'Contactanos', path: '/contactanos'},
    ];

    const services=[
        { title: 'Precio de los repuestos', path: '/Precios'},
        { title: 'Estados de la reparación', path: '/estado'},
        { title: 'Facturación', path: '/factura'},
    ];

    const navigate = useNavigate();

}