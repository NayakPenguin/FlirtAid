import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function GenderVerification({gender,id}){
// function GenderVerification(){
//   let id = "61ddd59f4fcd1ca2607da1a0";
//   let gender = "Female";
  const webcamRef = useRef(null);
  const [clicked, setClicked] = useState(0);
  const [name, setName] = useState('')
  const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: 'user'
  };
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      // console.log(`imageSrc = ${imageSrc}`);
      //for deployment, you should put your backend url / api
      axios.post('https://frozen-wave-24455.herokuapp.com/api', { data: imageSrc })
        .then(res => {
          setName(res.data)
          axios.post('https://faid-api.herokuapp.com/verifygender', {id, Gender:res.data, realgender:gender})
            .then(ress => {
              // alert(ress);
              // console.log(ress.data);
            })
            .catch(error => {
              // console.log(`error = ${error}`)
            })
        })
        .catch(error => {
          // console.log(`error = ${error}`)
        })
    },
    [webcamRef]
  );


  const handleVerify = () => {
    setClicked(1);
  }



  return (
    <Container>
      <Webcam
        className="camera"
        audio={false}
        height={100}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={150}
        videoConstraints={videoConstraints}
      />

      

      {
        name == gender?(
          <h2>{name}</h2>    
        ):(
          clicked ? (
            gender == "Male" && name == "Female" ? (
              <h2>Gender not Verified</h2>
            ):(
              gender == "Female" && name == "Male" ? (
                <h2>Gender not Verified</h2>
              ):(
                <h2>Loading...</h2>
              )
            )
          ):(
            <h2>Click Below for verification</h2>
          )
        )
      }

      {
        name === gender ? (
          <span>Congrats your account is successfully verified, now you are all set to create your profile.</span>
        ):(
          name != gender? (
            <span>Sorry you gender does not match the gender you have added while creating your profile. It is suggested that you 
              create your profile again, this is just to protect ourselves from dummy users.
            </span>
          ):(
            <span>Keep your eye open and the phone steady, your gender will be shown above after you click the button below. It is important for our user's security and authentic userbase.</span>
          )
        )
      }

      {
        // true?(
        name == gender?(
          <Link className="final-link" to="/create-account">Create Profile</Link>
        ) :(
          <button onClick={() => {capture(); handleVerify()}}>
            {
              clicked ? (
                name != gender ? (
                  <Link to="/create-account" className="end-link">Sign up again!</Link>
                ):(
                  <>Loading...</>
                )
              ):(
                <>Verify now</>
              )
            }
          </button>
        )
      }
    </Container>
  );
}

export default GenderVerification;

const Container = styled.div`
  padding: 10px;
  width: 100vw;
  overflow: hidden;
  position: relative;
  min-height: 100vh;

  .end-link{
    color: white;
    text-decoration: none;
    font-weight: 300;
    font-size: 0.9rem;
  }

  .final-link{
    position: absolute;
    border-radius: 10px;
    width: calc(100% - 2.5rem);
    bottom: 20px;
    left: 20px;
    appearance:none;
    border:none;
    outline:none;
    padding: 8px 16px;
    background-image: linear-gradient(to right,rgb(188, 105, 243) 50%, rgb(233, 78, 104) 50%) ;
    background-position: 0%;
    background-size: 200%;
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-weight: 700;
    transition: 0.4s;
    cursor: pointer;
    text-decoration: none;
    display: grid;
    place-items: center;
  }

  span{
    font-size: 0.85rem;
    font-weight: 200;
  }

  .camera{
    width: calc(100vw - 20px);
    border-radius: 5px;
  }
  .App{
    min-height: 100vh;
    position: relative;
    background-color: rgb(223, 115, 115);
  }
  .camera{
    position:relative;
  }
  .result{
    position:fixed;
    top:0;
    left:100%;
    width:100%;
    height:100%;
    display:flex;
    background-color: rgb(44, 43, 43);
    transition:0.4s;
  }
  .result.hasPhoto {
    left: 0;
  }
  video{
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  button{
    position: absolute;
    border-radius: 10px;
    width: calc(100% - 2.5rem);
    bottom: 20px;
    left: 20px;
    appearance:none;
    border:none;
    outline:none;
    padding: 8px 16px;
    background-image: linear-gradient(to right,rgb(188, 105, 243) 50%, rgb(233, 78, 104) 50%) ;
    background-position: 0%;
    background-size: 200%;
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-weight: 700;
    transition: 0.4s;
    cursor: pointer;
  }
  button:hover {
    background-position: 100%;
  }
`