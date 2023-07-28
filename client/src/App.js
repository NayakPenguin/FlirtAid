import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Chat from './components/Chat';
import CreateProfile from './components/CreateProfile';
import EditAccount from './components/EditAccount';
import Explore from './components/Explore';
import Home from './components/Home'
import OneChat from './components/OneChat';
import Profile from './components/Profile'
import RegistrationPage from './components/RegistrationPage';
import Updates from './components/Updates'
import { useState } from 'react';
import BottomNavbar from './components/BottomNavbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import Market from './components/Market';
import ViewProfile from './components/ViewProfile';
import LandAgain from './components/LandAgain';
import LandInChina from './components/LandInChina';
import PreRegister from './components/PreRegister';
import PrivacyPolicy from './components/PrivacyPolicy';
import Learn from './components/Learn';
import CommunitiesGuidelines from './components/CommunitiesGuidelines';
import AddPhotos from './components/AddPhotos';
import ConfessionPage from './components/ConfessionPage';
import TermsAndCond from './components/TermsAndCond';
import OurTeam from './components/OurTeam';
import Liked from './components/Liked';
import { useEffect } from 'react';
import ContactUs from './components/ContactUs';
import TempHome from './components/TempHome';
import GenderVerification from './components/GenderVerification';
import styled from 'styled-components';


const App = () => {
  const [current, setCurrent] = useState('Home');
  const [mainUser, setMainUser] = useState({});
  const [currUser, setCurrUser] = useState(null);



  // console.log(mainUser);



  return (
    <Container>
      <div className="only-pc">
        <h1>Hello There 👋🏻</h1>
        <p>
          To enhance your dating experience, we have optimized the website for mobile devices only. Please use the mobile application or resize the interface accordingly for the best user experience.          
        </p>
        <p className='issue'>In case faceing issues, connect developer - nayak.primary@gmail.com</p>
      </div>
      <div className="only-mobile">
        {
          Object.keys(mainUser).length == 0 ? (
            <Routes>
              {/* <Route path="/" element={<TempHome />} /> */}
              {/* <Route path="/" element={<PreRegister />} /> */}
              <Route path="/" element={<LandInChina />} />
              <Route path="/login" element={<Login setMainUser={setMainUser} mainUser={mainUser} />} />
              <Route path="/signup" element={<SignUp setMainUser={setMainUser} mainUser={mainUser} />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/create-account" element={<CreateProfile mainUser={mainUser} />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/community-guidelines" element={<CommunitiesGuidelines />} />
              <Route path="/terms-and-co" element={<TermsAndCond />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/home" element={<LandInChina />} />
              <Route path="/explore" element={<LandInChina />} />
              <Route path="/updates" element={<LandInChina />} />
              <Route path="/profile" element={<LandInChina />} />
              <Route path="/chats" element={<LandInChina />} />
              <Route path="/chats/personal-chat" element={<LandInChina />} />
              <Route path="/view-profile" element={<LandInChina />} />
              <Route path="/liked" element={<LandInChina />} />
              <Route path="/gender-verification" element={<GenderVerification/>} />
              <Route path="/edit-account" element={<EditAccount />} />
            </Routes>
          ) : (
            <Routes>
              {/* <Route path="/" element={<PreRegister />} /> */}
              <Route path="/login" element={<Login setMainUser={setMainUser} mainUser={mainUser} />} />
              <Route path="/signup" element={<SignUp setMainUser={setMainUser} mainUser={mainUser} />} />
              <Route path="/" element={<LandInChina />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/home" element={<Home mainUser={mainUser} setCurrUser={setCurrUser} />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/updates" element={<Updates mainUser={mainUser} />} />
              <Route path="/profile" element={<Profile mainUser={mainUser} />} />
              <Route path="/chats" element={<Chat mainUser={mainUser} />} />
              <Route path="/chats/personal-chat" element={<OneChat />} />
              <Route path="/edit-account" element={<EditAccount />} />
              <Route path="/signup-account" element={<RegistrationPage />} />
              <Route path="/create-account" element={<CreateProfile mainUser={mainUser} />} />
              <Route path="/market" element={<Market />} />
              <Route path="/view-profile" element={<ViewProfile currUser={currUser} />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/community-guidelines" element={<CommunitiesGuidelines />} />
              <Route path="/upload-photos" element={<AddPhotos />} />
              <Route path="/confessions" element={<ConfessionPage mainUser={mainUser} />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/liked" element={<Liked mainUser={mainUser} />} />
              <Route path="/gender-verification" element={<GenderVerification gender={mainUser.gender} id={mainUser._id} />}/>
            </Routes>
          )
        }
      </div>
    </Container>
  )
}

export default App

const Container = styled.div`
    .only-mobile{
      @media screen and (min-width: 800px){
        display: none;
      }
    }
    .only-pc{
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1{
        font-size: 7em;
      }

      p{
        max-width: 1000px;
        text-align: center;
        font-size: 1.25rem;
        font-weight: 200;
      }

      .issue{
        margin-top: 50px;
        font-size: 1rem;
        font-weight: 300;
      }

      @media screen and (max-width: 800px){
        display: none;
      }
    }
`