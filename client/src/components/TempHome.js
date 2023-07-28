import React from 'react'
import styled from 'styled-components'

const TempHome = () => {
    return (
        <TitleName>
            <h1>We’ve heard You! </h1>
            Thank You so much for you overwhelming response to FlirtAid. We heard all your problems and are working tirelessly to fix them all. We’ll email you an update on FlirtAid. For now, it’s under development. <br />
            Cheers🥂 <br />
            Your Very Own LoveGuru <br />
        </TitleName>
    )
}

export default TempHome

const TitleName = styled.div`
    background-color: #222;
    color: white;
    font-size: 0.8rem;
    letter-spacing: 0.075rem;
    height: 100vh;
    width: 100vw;
    padding: 1rem;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: center;

    h1{
        color: white;
        margin: 1rem;
        letter-spacing: 0.25rem;
    }
`