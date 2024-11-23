import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"




function Copyright (props){
    return(
        <Typopraphy variant="body2" color="text.secundary" algin="center"{...props} >
            <Link color="inherit" href="/">
                Juan Repara
            </Link>{' '}
            {new Date().getUTCFullYear}
            {'.'}
        </Typopraphy>
    );
}

export default function SingIn(){
    const [error,setError] = useState(null); 
    const [credentials,setCredentials] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = new FormaData(event.correntTarget);
        const cedula = data.get('cedula');
        const password = data.get('pasword');

        if (cedula.lenght !== 10 ){
            setError('La cedula debe contener 10 números');
            return;
        }

        if(!/^\d+$/.test(cedula)){
            setError('La cédula debe contener solo números');
            return;
        }

        if(!cedula || !password){
            setError('Ingresar Usuario o contraseña válida');
        } else {
            const credentials ={
                cedula: cedula,
                password: password, 
            };
            setCredentials(credentials);
            setError("");
        }
    };

    




}