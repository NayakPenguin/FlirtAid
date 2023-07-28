import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const PrivacyPolicy = () => {
    return (
        <Container>
            <Link to='/'>
                <ArrowBackIosIcon/>
            </Link>
            <h1>
                Privacy Policy
            </h1>
            <h3>
                FlirtAid Privacy Policy
            </h3>
            <p>
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.flirtaid.com (the “Site”).
            </p>
            <h3>
                PERSONAL INFORMATION WE COLLECT
            </h3>
            <p>
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
                We collect Device Information using the following technologies:
                    <span>- “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org.">http://www.allaboutcookies.org.</a> </span>
                    <span>- “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</span>
                    <span>- “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</span>
                    <span>- “Gender”, “orientation”, are stored electronically</span>
                Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, debit card numbers, bank account used), email address, and phone number.  We refer to this information as “Order Information.”
                Data of any item purchased through affiliate links, or any amount donated for building FlirtAid will be tracked.
                When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
            </p>

            
            <h3>HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
            <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to:
                <br /><br /> Communicate with you;
                <br />Screen our orders for potential risk or fraud; and
                When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
                In targeted advertising and retargeting; 
                We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
            </p>


            <h3>SHARING YOUR PERSONAL INFORMATION</h3>
            <p>We share your Personal Information with third parties to help us use your Personal Information, as described above.  For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: <a href="https://www.shopify.com/legal/privacy.">https://www.shopify.com/legal/privacy.</a>   We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/.">google.com/intl/en/policies/privacy/.</a>   You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout">google.com/dlpage/gaoptout</a> .</p>
            <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
            <p>In targeted advertising and retargeting; </p>

            <h3>BEHAVIOURAL ADVERTISING</h3>
            <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.  For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</p>
            <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: <a href="http://optout.aboutads.info/.">http://optout.aboutads.info/.</a></p>

            <h3>DO NOT TRACK</h3>
            <p>Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</p>

            <h3>YOUR RIGHTS</h3>
            <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
            <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>

            <h3>CONTACT US</h3>
            <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at aidflirt@gmail.com or by mail using the details provided below : <br /> WB, India</p>
        </Container>
    )
}

export default PrivacyPolicy

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