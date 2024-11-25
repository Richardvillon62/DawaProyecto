import React, { useState } from 'react';
import { Typography, Box, Grid, Container, Paper, TextField, Button } from '@mui/material';
import '../styles/ContactUs.css'; 

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  