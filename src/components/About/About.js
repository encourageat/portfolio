import './About.css'
//import { useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'


const About = () => {


    return (
        <div className="About">
        <div>
            <PageHeader title={'About..'}/>
        </div> 
        <div className="Aboutdetails">
        
        <p>
        This is a portfolio site which has a summary about myself and a link to a blog site I am maintaining.
        <br/>
        <br/>
        <h2>About..</h2>
        I am George V. Thomas, a graduate mechanical engineer who at initial days worked in the mechanical industry for a short term and later got switched to Software firms.
        <br/> 
        <br/>
        Domain Experience: Payment, Identity and Access Management, CAD
        <br/>
        <br/>
        In Software firms, I have experience over 22+ years.  My current company is Trianz, Bangalore where I work for 16+ years and over the past 6+ years as an Architect.
        <br/>
        <br/>
        Interested in job opportunities to lead a team or work as a Sr. Software Architect in Java/J2EE or related technolgies in Kerala (preferred and actively exploring), Bangalore or remote
        <br/>
        Contact Email: 
        <br/>
        georgeth471@gmail.com
        </p>
        <img src={pinkflower} alt="pink flower image"></img>
        </div>
        </div>
      );    
}
export default About;
/*
      <div>
            <PageHeader title={'About..'}/>
        </div>
        */