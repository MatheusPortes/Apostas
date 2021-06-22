import './style.css';
import {api} from '../../Api';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import Card from '../../components/Card';

const jogos = async ()=>{
    const response = await api.post('/listEvents/',{
        filter:{
            event:{
                countryCode: "BR",
            },
            locale:"BR",
        },
        
    }).then((response)=>{
        return response;
    }, err=>{return err});

    return response;
}

const Home = ()=>{

    const [loading,setLoading] = useState(false);
    const [futebol,setFutebol] = useState([]);

    useEffect(()=>{
        setLoading(true);
        jogos().then((res,err)=>{
           if(res.data !== undefined){
               setFutebol([]);
                res.data.map(el=>{
                    if(el.event.countryCode === 'BR'){
                        setFutebol(prev=>[...prev,el.event]);
                        console.log(el.event)
                        setLoading(false);
                    }
                });
           }

            if(err) throw err;
        });
    },[]);

    const jogos_futebol = futebol.map((el)=>{
        return <Card title={el.name} body={el.openDate} footer={el.countryCode} />
    })

    return (
    
        loading?
            <Loading/>
            :
            <>
                <h3 className="label">Futebol - Jogos disponíveis</h3>
                <div id="jogos" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',flexFlow: 'wrap'}}>
                    {jogos_futebol}
                </div>
            </>
    

    );
}

export default Home;

export function Futebol(){
    return <h1>Futebol</h1>
}