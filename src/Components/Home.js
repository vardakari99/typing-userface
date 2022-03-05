import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../index.css';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Navbar from './Navbar';

const Home = () => {
    const [userName, setUserName] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const usernameHandler = event => {
        setUserName(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        //post data
        axios.post("http://localhost:3001/api/insert/user", { email: userName })
        .then(res =>{
            console.log(res.status);
            console.log(res.data);
        })
        navigate('/validate', { replace: true });
    }
    const validateHandler = () => {
        //match otp sent and the one user entered in the input box
    }
    const validateCaptcha = (value) => {
        console.log('Captcha value:', value);
        if(value != null){
            //post data
            axios.post("http://localhost:3001/api/insert/user", { email: userName })
            .then(res =>{
                console.log(res.status);
                if(res.status === 200){
                    navigate('/validate', { replace: true });
                }else{
                    navigate('*', {replace: true});
                }
                console.log(res.data);
            })
            console.log("form submitted");
            setIsAuthenticated(true);
        }else{
            setIsAuthenticated(false);
        }
      } 

    return ( 
        <div className='bg-theme' style={{"height": "91vh"}}>
            <Navbar/>
            <div className='container d-flex flex-column align-items-center justify-content-center'>
                <h1>Typing Test</h1>
                <p>Test your typing score today!</p>
                <div className='intro-body'>
                    Typing board image here
                </div>
                <div>
                    <h2>Take the Test today!</h2>
                    <form onSubmit = { submitHandler }>
                        <input type="email" id="username" className="form-control my-3 py-3 px-3" placeholder="Type your name to start the test..." style={{"minWidth": "340px"}} onChange={usernameHandler}></input>
                        <button type='submit' className='px-5 d-block mx-auto py-2 btn btn-theme-secondary text-white h3'>Go to Test</button>
                        <div className="App">
                            <ReCAPTCHA
                                sitekey="6Lf3KbQeAAAAAHXlYdJ315hoNAQm5UsjmBsXzfuN"
                                onChange={validateCaptcha}
                                onErrored={()=>{alert("Wrong Captacha! Retry Again")}}
                            />
                        </div>
                        <input type="text" id="userotp" className="form-control my-3 py-3 px-3" placeholder="ENter OTP" style={{"minWidth": "340px"}} onChange={validateHandler}/>
                        <button></button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Home;