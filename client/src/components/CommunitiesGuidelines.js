import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const CommunitiesGuidelines = () => {
    return (
        <Container>
            <Link to='/'>
                <ArrowBackIosIcon/>
            </Link>
            <h1>Guidelines</h1>
            <p>Welcome to the FlirtAid community. If you’re honest, kind and respectful to others, you’ll always be welcome here. If you choose not to be, you may not last. Our goal is to allow users to express themselves freely as long as it doesn’t offend others. Everyone is held to the same standard on FlirtAid. We’re asking you to be considerate, think before you act, and abide by our community guidelines both on and offline. You heard that right: your offline behavior can lead to termination of your FlirtAid account.Below is a list of our community policies. If you violate any of these policies, you might be banned from FlirtAid. Seriously, don’t make us Swipe Left on you—because there will be no do-overs once we do.FlirtAid is not for:</p>
            <h3>Nudity/Sexual Content</h3>
            <p>We’re not asking you to comb your hair to one side or even speak in full sentences; but please keep it classy and appropriate for public consumption. No nudity, no sexually explicit content, and don’t chronicle all of your sexual desires in your bio. Keep it clean.</p>
            <h3>Harassment</h3>
            <p>Do not engage, or encourage others to engage, in any targeted abuse or harassment against any other user. This includes sending any unsolicited sexual content to your matches. Reports of stalking, threats, bullying, or intimidation, are taken very seriously.</p>
            <h3>Violence and Physical Harm</h3>
            <p>We do not tolerate violent, graphic, or gory content on FlirtAid, or any actions or content that advocate for or threaten violence of any sort, including threatening or promoting terrorism. Physical assault, coercion, and any acts of violence are strictly prohibited.</p>
            <p>Content that advocates for or glorifies suicide or self-harm is also not allowed. In these situations, we may take a number of steps to assist the user, including reaching out with crisis resources.</p>
            <h3>Hate Speech</h3>
            <p>Any content that promotes, advocates for, or condones racism, bigotry, hatred, or violence against individuals or groups based on factors like (but not limited to) race, ethnicity, religious affiliation, disability, gender, age, national origin, sexual orientation, or gender identity is not allowed.</p>
            <h3>Private Information</h3>
            <p>Don’t publicly broadcast any private information, yours or anyone else’s. This includes social security numbers, passports, passwords, financial information or unlisted contact information, such as phone numbers, email addresses, home/work address.</p>
            <h3>Promotion or Solicitation</h3>
            <p>Soliciting other users is prohibited on FlirtAid. It’s fine to invite your matches to something that you’re doing, but if the purpose of your profile is to advertise your event or business, non-profit, political campaign, contest, or to conduct research, we may delete your account. While we’re excited that you’re doing a comedy show next week, please don’t use FlirtAid to promote it.</p>
            <h3>Prostitution and Trafficking</h3>
            <p>Promoting or advocating for commercial sexual services, human trafficking or other non-consensual sexual acts is strictly prohibited and will result in your account being banned from FlirtAid.</p>
            <h3>Scamming</h3>
            <p>FlirtAid has a zero-tolerance policy on predatory behavior of any kind. Anyone attempting to get other users’ private information for fraudulent or illegal activity may be banned. Any user caught sharing their own financial account information (PayPal, Venmo, etc.) for the purpose of receiving money from other users may also be banned from FlirtAid.</p>
            <h3>Impersonation</h3>
            <p>Be yourself! Don’t pretend to be someone else</p>
            <p>Do not impersonate, or otherwise misrepresent affiliation, connection or association with, any person or entity. This includes parody accounts. While we think your Mike Pence profile is hilarious, you aren’t Mike Pence. And if you are, what are you doing on FlirtAid?</p>
            <h3>Minors</h3>
            <p>You must be 18 years of age or older to use FlirtAid. As such, we do not allow images of unaccompanied minors. If you want to post photos of your children, please make sure that you are in the photo as well. If you see a profile that includes an unaccompanied minor, encourages harm to a minor, or depicts a minor in a sexual or suggestive way, please report it immediately.</p>
            <h3>Copyright and Trademark Infringement</h3>
            <p>If it’s not yours, don’t post it. If your FlirtAid profile includes any work that is copyrighted or trademarked by others, don’t display it, unless you are allowed to do so</p>
            <h3>Illegal Usage</h3>
            <p>Don’t use FlirtAid to do anything illegal. If it’s illegal IRL, it’s illegal on FlirtAid.</p>
            <h3>One Person, One Account</h3>
            <p>FlirtAid accounts cannot have multiple owners, so don’t create an account with your friend or significant other. Additionally, please don’t maintain multiple FlirtAid accounts.</p>
            <h3>Third Party Apps</h3>
            <p>The use of any apps created by anyone other than FlirtAid that claim to offer our service or unlock special FlirtAid features (like auto-swipers) is not allowed.</p>
            <h3>Account Dormancy</h3>
            <p>FlirtAid is fun to use... all the time! Use FlirtAid at the lake, use FlirtAid while eating cake. Use FlirtAid when you’re out, use FlirtAid when in doubt! But, if you don’t log in to your FlirtAid account in 2 years, we may delete your account for inactivity.</p>
            <br />
            <p>FlirtAid reserves the right to investigate and/or terminate your account without a refund of any purchases if you have misused the Service or behaved in a way that FlirtAid regards as inappropriate, unlawful, or in violation of the Terms of Use, including actions or communications that occur off the Service but involve users you meet through the Service.</p>
            
        </Container>
    )
}

export default CommunitiesGuidelines

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
        font-size: 0.7rem;
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