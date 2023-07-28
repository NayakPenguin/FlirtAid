import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Liked = ({ mainUser }) => {
    // console.log(mainUser);
    const [tempdata, setTempdata] = useState([]);

    useEffect(async () => {
        await fetch(`https://faid-api.herokuapp.com/getreqlist/${mainUser._id}`)
            .then(response => response.json())
            .then(resp => {
                setTempdata(resp);
                // console.log(resp);
            });
    }, [])


    return (
        <Container>
            <TopLabel>
                <Link className="backArrow" to='/explore'>
                    <ArrowBackIosIcon style={{ fontSize: '1.2rem' }} />
                </Link>
                <h3>Your Likes</h3>
            </TopLabel>

            <CardHolder>
                {
                    tempdata.map((user, idx) => {
                        return(
                            <Card key={idx} style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url(${user.image[0]}) center center / cover no-repeat` }}>
                                <section>
                                    <div>
                                        {user.percent}
                                    </div>
                                    <main>
                                        <p>
                                            {user.name}
                                        </p>
                                        <span>
                                            {user.status}
                                        </span>
                                    </main>
                                </section>
                            </Card>
                            )

                    })
                }
            </CardHolder>
        </Container>
    )
}

export default Liked


const Container = styled.div`
    background-color: #1f2225;
    min-height: 100vh;
    padding: 1rem 0.6rem;

    h3{
        color: white;
        font-size: 1.25rem;
        letter-spacing: 0.1rem;
    }
`

const CardHolder = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem 0;
`

const Card = styled.div`
    width: 49%;
    border: 1px solid grey;
    height: 240px;
    background-color: pink;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-top: 10px;
    /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://www.glasgowtimes.co.uk/resources/images/4053884/?type=responsive-gallery') center center / cover no-repeat; */

    section{
        position: absolute;
        bottom: 5px;
        width: 100%;
        padding: 0.3rem 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;


        div{
            height: 35px;
            width: 35px;        
            background-color: #EF4339;
            border-radius: 50%;
            color: white;
            display: grid;
            place-items: center;
            font-size: 0.8rem;
        }

        main{
            margin-bottom: -3px;
            width: calc(100% - 40px)
        }

        p{
            color: white;
            font-size: 0.8rem;
            display: block;
            line-height: 1rem;
            margin-bottom: -8px;
        }
        
        span{
            color: white;
            font-size: 0.6rem;
            line-height: 0rem;
        }
    }

`

const TopLabel = styled.div`
    display: flex;
    align-items: center;

    .backArrow{
        margin-bottom: -1px;
        display: grid;
        place-items: center;
        height: 30px;
        width: 30px;
        padding-left: 7px;
        background-color: black;  
        border-radius: 50%;    
        margin-right: 0.5rem;  
    }

`