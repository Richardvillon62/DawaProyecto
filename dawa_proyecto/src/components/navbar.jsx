import '../App.css';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { getByTitle } from '@testing-library/react';
import { Divider } from '@mui/material';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Navbar() {
    const pages = [
        { title: 'Inicio', path: '/'},

    ];
}