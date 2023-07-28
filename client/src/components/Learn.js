import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const Learn = () => {
    return (
        <Container>
            <Link to='/'>
                <ArrowBackIosIcon/>
            </Link>
            <h1>How to Use</h1>
            <h3>How to match?</h3>
            <p>As soon as you sign up to the app, you will be asked to complete your profile. You will have the option to input links to your other social media accounts (read Facebook, Instagram, Reddit, LinkedIn or/and Twitter). You will have to fill in your hobbies and passions, your department and your year of study. A short bio and some of your best pictures will definitely increase your chances of finding your loved one. After this time investment into finding eternal love, you will come to the homepage. The homepage will show you pictures of people based on your orientation. </p>
            <p>There are 3 buttons on the picture, reject, account and like. When you click reject (or swipe left), well we hope you don’t find out what that does. When you click on the account button, you’ll get to know more about the person behind the picture. On clicking on the like button (or swiping right), you will send a match request to “fingers-crossed”, your to-be partner. If they accept your match, you’ll be able to chat with them, remember to follow the signals in the chat. This breakthrough feature will help you navigate the impossible to understand unsaid signals.</p>

            <h3>Signal System</h3>
            <p>FlirtAid implements a simple signalling system to improve conversations between two newly matched couples. In reality it is very difficult to predict how one should go about conversing with the person they’re attracted to, but having something is always better than having nothing. When thinking about the Signal System, think about the “Traffic Light”. Remember class 2, where you learnt that there are 3 traffic signals, Red, Yellow and Green. Well, we stood in front of that very signal and gave you and your partner the option to signal Red, Yellow or Green to one another. </p>
            <p><strong>Red</strong> is the default signal on matching, and it intimates users to take it slow and easy with the other person, as they aren’t very comfortable yet. </p>
            <p><strong>Yellow</strong> implies the person is somewhat comfortable and you could take the next step in the conversation. This colour is the in-between zone where you could get a bit more comfy but be careful to not get creepy. We told you that we are “Flirt”Aid. Could flirting get any easier?</p>
            <p><strong>Green</strong> is the signal you’d be on the lookout for. It means you could potentially ask the person out and venture into the unknown…</p>
            <p> The feature, overall may sound simple and insignificant but is very effective in ensuring better communication and smooth interactions between two people who like one another but don’t know much about each other. It aims at bringing down the number of awkward conversations, creepy texts and failed matches drastically. Of course there could be an occasional hiccup here and there, but the system is as robust and effective as developed till date.</p>

            <h3>Match Meter</h3>
            <p>Are you looking for “the one” like Ted Mosby, or “scores” like Robin and Barney? (HIMYM people say what)... Whatever it is that you are looking for, there must be some connection between you and your partner. But, how in hell will you know if there is some connection? You cannot just be throwing darts in the dark hoping to find the “perfect” partner. Introducing the revolutionary (ahhh we know it isn’t, wtf - “Why the face?”) match meter. Using a proprietary algorithm (this means that it’s a secret shhh..), FlirtAid estimates a percentage which predicts the chances of a lasting relationship. </p>
            <p>REMEMBER: In matters of the heart, numbers are just a guiding tool. Always follow whatever your heart says. The 5% chance the match meter predicts is still worth fighting for.</p>

            <h3>Confession Page  </h3>
            <p> Have you ever wanted to confess your love for someone anonymously but haven’t been ? We suggest that you connect with them on this app called FlirtAid, but if you prefer anonymity so be it. The confession page in FlirtAid will actually help you do just that. In most of the facebook confession pages , a lot of people fake their gender as the confession pages do not have any gender authentication system. This actually results in fake confession portrayals which makes the page actually lose its agenda and purpose.  So even if you see a confession to your name, you actually doubt it and your inner urge to find the person and possibly build a meaningful relationship dies. And thus, another Romeo-Juliet gets separated even before meeting just because some people wanted to fake their genders. But as you have realised by now, in FlirtAid there are NO fake profiles. No fake profiles mean, nobody can fake their gender to write a fake confession and every feeling expressed for their loved ones is genuine. And to be more frank, who does not like genuine romantic confession even if it's anonymous? :))</p>
        </Container>
    )
}

export default Learn

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