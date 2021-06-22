import './style.css';
import {format} from 'date-fns';
import { Link } from 'react-router-dom';

export default function Card(props){
    return (
        <div className="card" id={props.id}>
            
            <section className="header">
                <h4 style={{textAlign: 'center'}}>{props.title}</h4>
            </section>
            
            <section className="body">
                <h3 style={{textAlign: 'center', marginTop: 30,}}>{format(new Date(props.body), 'dd/MM/yy HH:mm') + "h"}</h3>
            </section>
            
            <footer>
               <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around',}}>
                   <Link to="/aposta"><h4 className="text"> Apostar agora {props.footer}</h4></Link>
                   {/* <h4> {props.footer} </h4> */}
               </div>
            </footer>
        </div>
    )
}