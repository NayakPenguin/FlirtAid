import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '@material-ui/icons/Clear';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('1');
    const [alertMessage, setAlertMessage] = useState("");
    const [progress, setProgress] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setAlertMessage("Please Enter your Name");
        }
        else if (!email) {
            setAlertMessage("Please Enter your Email");

        }
        else if (!password) {
            setAlertMessage("Please Enter your Password");

        }
        else if (!gender) {
            setAlertMessage("Please Enter your Gender");

        }
        else if (email.includes('@') && email.includes('.com') && (email.length > 7)) {
            setProgress(true);
            fetch('https://poised-fatigues-foal.cyclic.app//register', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    email: (email.toLowerCase()),
                    password: password,
                    gender: gender,
                })
            }).then(response => response.json())
                .then(user => {
                    setProgress(false);
                    if (user.name) {
                        this.setState({ route: 'Dashboard' });
                        // Change dashboard to otp
                    }
                    else {
                        setAlertMessage(user);
                    }
                })
        }
        else {
            setAlertMessage("Invaild Email");
        }

        setName("");
        setEmail("");
        setPassword("");
        setGender("");
    }

    const [showAlert, setShowAlert] = useState(false);


    return (
        <>
            {
                showAlert ? (
                    <>
                        <CustomAleart onClick={() => setShowAlert(false)}>
                            <div>
                                {alertMessage}
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1200px-Flat_cross_icon.svg.png" alt="" />
                            </div>
                        </CustomAleart>
                    </>
                )

                    :

                    (
                        <></>
                    )
            }
            <Container>
                <Link to="/">
                    <section>
                        <ClearIcon style={{ fill: "white" }} />
                    </section>
                </Link>
                <section>
                    <h1 style={{ marginLeft: '0.5rem' }}>
                        Sign Up
                    </h1>
                </section>
                <Inputs>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Inputs>
                <OptionsImp>
                    <input type="radio" id="exampleRadios1" name="gender" value="Male" style={{ marginLeft: '0.5rem' }} onClick={(e) => setGender(e.target.value)} />
                    <label class="form-check-label-local" for="exampleRadios1" style={{ color: 'grey', fontSize: '0.9rem', margin: '0 1rem 0 0.4rem' }}>
                        Male
                    </label>
                    <input type="radio" id="exampleRadios2" name="gender" value="Female" onClick={(e) => setGender(e.target.value)} />
                    <label class="form-check-label-local" for="exampleRadios2" style={{ color: 'grey', fontSize: '0.9rem', margin: '0 1rem 0 0.4rem' }}>
                        Female
                    </label>
                    <input type="radio" id="exampleRadios2" name="gender" value="Others" onClick={(e) => setGender(e.target.value)} />
                    <label class="form-check-label-local" for="exampleRadios2" style={{ color: 'grey', fontSize: '0.9rem', margin: '0 1rem 0 0.4rem' }}>
                        Others
                    </label>
                </OptionsImp>


                <RightButtonContainer onSubmit={handleSubmit}>
                    <button type="submit" onClick={() => setShowAlert(true)}>
                        {
                            progress ? (
                                <img className="progress-image" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif" alt="" />
                            ) : (
                                <ArrowForwardIcon style={{ fill: 'white' }} />
                            )
                        }
                    </button>
                </RightButtonContainer>
                <HideNav>
                    <section>
                        <span>
                            Already have an account? <Link className="changeToRedLink" to="/login">Sign in</Link>
                        </span>
                    </section>
                </HideNav>
            </Container>
        </>
    )
}

export default SignUp



const Container = styled.div`   
    min-height: 90vh;
    padding: 0.5rem;
    background-color:  black;
    background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .5)), url('https://searchera.io/img/pattern.svg') center center / cover no-repeat;
    position: relative;
    bottom: 0;
    min-height: 100vh;
    width: 100vw;

    .changeToRedLink{
        color: black;
        display: inline;
        text-decoration: none;
    }

    .progress-image{
        height: 1.5rem;
    }

    section{
        display: block;

        h1{
            color: white;
            font-weight: 500;
            font-size: 1.5rem;
            letter-spacing: 0.05rem;
        }
    }
`

const OptionsImp = styled.div`
    margin-left: 0.6rem;
`

const HideNav = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 23vh;
    
    section{
        display: flex;
        justify-content: space-between;
        align-items: center;

        span{
            color: white;
            text-align: center;
            font-size: 0.75rem;
            letter-spacing: 0.05rem;
            margin: auto;
        }
    }

    button{
        height: 50px;
        width: 80px;
        border-radius: 25px;
        /* background-color: #f6f6f8; */
        background-color: transparent;
        display: grid;
        place-items: center;
        border: none;
        border: 1px solid #f6f6f8;

        img{
            height: 25px;
        }
    }
`

const Inputs = styled.div`
    margin: 5rem 0.8rem 1rem 0.8rem;


    input{
        width: 100%;
        display: block;
        margin-top: 1.5rem;
        border: 1px solid white;
        border-radius: 100px;
        padding: 0.5rem 1rem;
        outline: none;
        background-color: transparent;
        color: white;
        font-size: 0.85rem;
    }

    div{
        display: flex;
        justify-content: flex-end;
        padding: 0.1rem 0.4rem;

        span{
            font-size: 0.7rem;
            color: white;
            letter-spacing: 0.05rem;
        }
    }

    
`

const RightButtonContainer = styled.form`
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    margin-top: 2rem;

    button{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: #ef4239;
        display: grid;
        place-items: center;
        border: none;
    }
`

const CustomAleart = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    transition-delay: 2s;
    @media(min-width: 900px){
            display: none;
        } 
    
    
    div{
        position: fixed;
        top: 30px;
        z-index: 100;
        padding: 1rem;
        width: 600px;
        background-color: #5fd979;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;

        @media(max-width: 900px){
            padding: 0.5rem 1rem;
            width: 90vw;
            top: auto;
            bottom: 20px;
            font-size: 0.9rem;
            background-color: #5fd979;
        } 

        img {
            height: 1.4rem;
            margin-right: 0.3rem;
        }
    }
`