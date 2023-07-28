import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import TopNavigation from './TopNavigation';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import ClearIcon from '@material-ui/icons/Clear';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const CardsContainNotVer = ({setOpenDeniedModal}) => {
    return (
        <CardsContainer>
            <GoNext onClick={() => setOpenDeniedModal(true)}>
                <ChevronRightIcon style={{ fontSize: '1.5rem', fill: 'white' }} />
            </GoNext>
            <SectionCenter>
                <Card style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url("https://images.squarespace-cdn.com/content/v1/554d112fe4b05b941e18b2f2/1539806557964-KDBA10CC3AEPA5GIXJUT/Couples+Sunrise+Lake+Session+Dallas+Fort+Worth2.jpg") center center / cover no-repeat` }}>
                    <CardTopBar>
                        <main></main>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </CardTopBar>

                    <section>
                        <UserDesc>
                            <p>
                                Jackky Bhagnani
                            </p>
                            <span>Arts, 25</span>
                            <span style={{ fontWeight: '200', fontSize: '0.6rem' }}>
                                This is just a introduction card. <br />
                                1. To start surfing through real humans <Link style={{color: 'cornflowerblue', textDecoration: 'none'}} to="/create-account">create your profile</Link> <br />
                                2. You will be then allowed to like, reject and view profile.  <br />
                                Happy dating 🥂
                            </span>
                        </UserDesc>
                    </section>
                    <Response>
                        <span onClick={() => setOpenDeniedModal(true)}>
                            <ClearIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                        </span>
                        <a onClick={() => setOpenDeniedModal(true)}>
                            <span style={{ height: '55px', width: '55px', border: '2px solid orange' }}>
                                <DashboardIcon style={{ fill: 'white', fontSize: '1.4rem', fontSize: '2rem' }} />
                            </span>
                        </a>
                        <span onClick={() => setOpenDeniedModal(true)}>
                            <FavoriteBorderIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                        </span>
                    </Response>
                </Card>

            </SectionCenter>


            <Fade bottom>
                <DescCard>
                    <div>
                        92%
                    </div>
                    <section>
                        <strong>Highly compatible. </strong>
                        Here we show match percentage with your date.
                    </section>
                </DescCard>
            </Fade>


        </CardsContainer>
    )
}

export default CardsContainNotVer



const CardsContainer = styled.div`
    background-color: #1f2225;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    /* height: 96vh; */
    padding: 0.8rem 0.6rem 0 0.6rem;
`

const ShowReqSent = styled.div`
    position: absolute;
    top: 20px;
    right: 15px;
    color: white;
    text-transform: uppercase;
    background-color: #ef4239;
    border: 1px solid white;
    font-size: 0.6rem;
    letter-spacing: 0.15rem;
    padding: 0.3rem 0.5rem;
    border-radius: 10px;
    z-index: 10;
`

const GoNext = styled.div`
    position: absolute;
    top: 40%;
    right: 5px;
    z-index: 10;
    background-color: #d88c03;
    border-radius: 100px;
    height: 35px;
    width: 35px;
    display: grid;
    place-items: center;
    border: 1px solid white;


`

const CardTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.02rem 0.3rem;

    main{
        height: 4px;
        width: 19%;
        border-radius: 100px;
        background-color: pink;
    }

    span{
        height: 4px;
        width: 19%;
        border-radius: 100px;
        background-color: grey;
    }
`

const Response = styled.div`
    height: 70px;
    overflow: hidden;
    padding: 0.1rem 1rem 0.3rem 1rem;
    display: flex;
    /* align-items: center; */
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    bottom: 5px;
    width: 100%;

    span{
        height: 45px;
        width: 45px;
        border-radius: 50%;
        border: 1px solid orange;
        display: grid;
        place-items: center;
    }
`

const Card = styled.div`
    height: 70vh;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin: 0 0 8px 0;
    /* box-shadow: 0px 18px 53px 0px #a9a2a24d; */
    /* box-shadow: 0px 0px 10px #646161, 2px -4px 34px #c9c9c9; */
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://c.ndtvimg.com/2021-08/6gck6u18_kim-jong-un-bloomberg-270_295x200_03_August_21.jpg') center center / cover no-repeat; */
    overflow: hidden;
    position: absolute;


    section{
        position: absolute;
        bottom: 65px;
        width: 100%;
        padding: 0.3rem 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`

const ShowImage = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: pink; */
  position: absolute;
`

const ShowLike = styled.div`
    position: absolute;
    /* bottom: -100px; */
    left: -50px;
    z-index: 10;
    

    img{
        height: 30rem;
    }
`

const DescCard = styled.div`
    width: 100%;
    background-color: #2e3136;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 0.3rem;
    /* box-shadow: 0px 1px 53px 0px #a9a2a24d; */
    /* box-shadow: 0px 0px 10px #bfbaba, 2px -4px 34px #ddcece; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    

    section{
        flex: 1;
        margin-left: 10px;
        font-size: 0.7rem;
        line-height: 1rem;
        letter-spacing: 0.05rem;
        color: white;

        strong{
            color: green;
        }
    }

    div{
        height: 50px;
        width: 50px;        
        background-color: #EF4339;
        border-radius: 50%;
        color: white;
        display: grid;
        place-items: center;
        font-size: 0.95rem;
    }
`

const UserDesc = styled.div`
    padding: 0 1rem;
    

    p{
        color: white;
        font-size: 0.85rem;
        font-weight: 600;
    }

    span{
        display: block;
        color: white;
        font-size: 0.65rem;
    }
`

const SectionCenter = styled.div`
  height: 70vh;
  background-color: cornflowerblue;
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 8px;

  img{
    width: 100%;
    height: 100%;
    position: absolute;
    /* opacity: 0; */
    /* transition: all 0.3s linear; */
  }

  .activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  .lastSlide {
    transform: translateX(-100%);
  }

  .nextSlide {
    transform: translateX(100%);
  }
`