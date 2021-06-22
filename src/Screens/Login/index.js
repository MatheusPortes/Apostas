import React,{ useEffect } from 'react';
import {api_login} from '../../Api';

const auth = async ()=>{
    const userConf = {
        name: 'walesondornelas',
        password: 'w1331W@$',
    }


    await api_login.post('/login',{"name": 'waleson_melo',"password": 'w1331W@$'}).then((data)=>{
        console.log(data.data);
    },err=>console.log(err));
}

const Login = ()=>{

    useEffect(()=>{
        auth();
    },[])

    return (
        <h1>Login</h1>
    );
}

export default Login;