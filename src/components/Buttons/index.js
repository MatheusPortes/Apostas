import './style.css';

const ButtonLogin = (props)=>{
    return (
        <div className=".btnlogin">
           <span style={{color:props.color?props.color:'#fff'}}>Login</span>
        </div>
    );
}

export default ButtonLogin;
