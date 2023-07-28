import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const TermsAndCond = () => {
    return (
        <Container>
            <Link to='/'>
                <ArrowBackIosIcon/>
            </Link>
            <h1>
                Terms & Conditions
            </h1>
            <h3>
                FlirtAid Privacy Policy
            </h3>
            <p>
                Last revised on November 19, 2021 <br />
                For a summary of our Terms of Use, go to Summary of Terms. <br />
                Welcome to FlirtAid. These Terms of Use are between you and: <br />
                FlirtAid <br />
                The terms (“us”, “we”, the “Company” or “FlirtAid”) refer to FlirtAid <br />
            </p>
            <h3>
                1. Acceptance of Terms of Use Agreement.
            </h3>
            <p>
                By creating a FlirtAid account, whether through a mobile device, mobile application or computer (collectively, the “Service”) you agree to be bound by (i) these Terms of Use, (ii) our Privacy Policy, Cookie Policy, Arbitration Procedures (if applicable to you), Safety Tips, and Community Guidelines, each of which is incorporated by reference into this Agreement, and (iii) any terms disclosed and agreed to by you if you purchase additional features, products or services we offer on the Service (collectively, this "Agreement"). If you do not accept and agree to be bound by all of the terms of this Agreement, please do not use the Service. <br />
                We may make changes to this Agreement and to the Service from time to time. We may do this for a variety of reasons including to reflect changes in or requirements of the law, new features, or changes in business practices. The most recent version of this Agreement will be posted on the Service under Settings and also on www.flirtaid.com, and you should regularly check for the most recent version. The most recent version is the version that applies. If the changes include material changes to your rights or obligations, we will notify you at least 30 days in advance of the changes (unless we’re unable to do so under applicable law) by reasonable means, which could include notification through the Service or via email. If you continue to use the Service after the changes become effective, then you agree to the revised Agreement.
            </p>


            <h3>2. Eligibility.</h3>
            <p>
                You are not authorized to create an account or access or use the Service or systems it resides on unless all of the following are true: <br />
                you are at least 18 years of age. <br />
                you can form a binding contract with FlirtAid, <br />
                you are not a person who is barred from using the Service under the laws of the United States or any other applicable jurisdiction (for example, you do not appear on the U.S. Treasury Department’s list of Specially Designated Nationals or face any other similar prohibition), <br />
                you will comply with this Agreement and all applicable local, state, national and international laws, rules and regulations, and <br />
                you have never been convicted of a felony or indictable offense (or crime of similar severity), a sex crime, or any crime involving violence, and that you are not required to register as a sex offender with any state, federal or local sex offender registry. <br />

            </p>


            <h3>3. Your Account.</h3>
            <p>In order to use FlirtAid, you may sign in using a number of ways, including by Facebook login. If you choose to use your Facebook login, you authorize us to access and use certain Facebook account information, including but not limited to your public Facebook profile. For more information regarding the information we collect from you and how we use it, please consult our Privacy Policy.</p>
            <p>You are responsible for maintaining the confidentiality of your login credentials you use to sign up for FlirtAid, and you are solely responsible for all activities that occur under those credentials. If you think someone has gained access to your account, please immediately contact us.</p>
            <br />
            <a style={{fontSize: '0.8rem'}}>Read more</a>
        </Container>
    )
}

export default TermsAndCond

const Container = styled.div`
    padding: 1rem;

    h1{
        font-size: 1.8rem;
    }

    h3{
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        margin-top: 1rem;
        margin-bottom: 0.4rem;
    }

    p{
        font-size: 0.8rem;
        line-height: 1.2rem;

        span{
            font-weight: 500;
            display: block;
            margin: 0.5rem 0;
        }
    }

    a{
        color: cornflowerblue;
        letter-spacing: 0.1rem;
        text-decoration: none;
    }
`