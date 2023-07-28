import React from 'react'
import styled from 'styled-components'
import BasicBottomNav from './BasicBottomNav'
import BottomNavbar from './BottomNavbar'
import { Link } from 'react-router-dom'
import mainLogo from './FAid.png';

const Explore = () => {
    return (
        <Container>
            <CardHolders>
                <CardTwo>
                    <section>
                        <main>
                            <h4>Your Likes</h4>
                            <p>
                                This shows all the profiles you have liked,
                                and sent request to. 
                            </p>
                        </main>
                        <Link to="/liked">
                            Show Liked
                        </Link>
                    </section>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_orange_heart.svg/1024px-Eo_circle_orange_heart.svg.png" alt="" />
                </CardTwo>
                {/* <CardTwo>
                    <section>
                        <main>
                            <h4>Most Liked</h4>
                            <p>
                                This is based on the likes that people have done 
                                on a person's profile and shows the person who is most on demand.
                            </p>
                        </main>

                        <a>
                            View now
                        </a>
                    </section>
                    <img src="https://png.pngtree.com/png-vector/20190621/ourlarge/pngtree-fire-icon-png-image_1507235.jpg" alt="" />
                </CardTwo> */}
                <CardOne>
                    <img src="https://media.cdnandroid.com/item_images/880245/imagen-samsung-notes-0thumb.jpg" alt="" />
                    <section>
                        <main>
                            <h4>Confessions</h4>
                            <p>
                                Tell your love , how much you admire him/her secretly.
                            </p>
                        </main>
                        <Link to="/confessions">
                            View Now
                        </Link>
                    </section>
                </CardOne>
            </CardHolders>
            <BasicBottomNav />
        </Container>
    )
}

export default Explore

const Container = styled.div`
    background-color: #1f2225;
    min-height: 100vh;

    a{
        text-decoration: none;
    }
`

const CardHolders = styled.div`
    padding: 0.3rem;
    margin-bottom: 70px;
`

const CardOne = styled.div`
    height: 130px;
    overflow: hidden;
    background: rgb(176,28,51);
    background: linear-gradient(90deg, rgba(176,28,51,1) 13%, rgba(134,101,106,1) 100%);
    border-radius: 10px;
    margin-bottom: 0.3rem;
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    

    img{
        height: 100%;
        border-radius: 50%;
        margin-right: 9px;
    }

    section{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        main{
            h4{
                color: white;
                letter-spacing: 0.1rem;
            }
    
            p{
                font-size: 0.5rem;
                color: white;
                letter-spacing: 0.05rem;
                line-height: 1rem;
            }
        }

        a{
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.25rem;
            color: orange;
        }

    }
`

const CardTwo = styled.div`
    height: 130px;
    overflow: hidden;
    background: rgb(176,28,51);
    background: linear-gradient(90deg, rgba(176,28,51,1) 13%, rgba(134,101,106,1) 100%);
    border-radius: 10px;
    margin-bottom: 0.3rem;
    padding: 0.3rem 0.3rem 0.3rem 0.6rem;
    display: flex;
    justify-content: space-between;
    

    img{
        height: 100%;
        border-radius: 50%;
        margin-left: 9px;
    }

    section{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        main{
            h4{
                color: white;
                letter-spacing: 0.1rem;
            }
    
            p{
                font-size: 0.5rem;
                color: white;
                letter-spacing: 0.05rem;
                line-height: 1rem;
            }
        }

        a{
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.25rem;
            color: orange;
        }

    }
`