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
        <p>I am a Software Developer based in Kerala State, India. I am working in the
            Identity and Access Management domain and passionate about sharing the knowledge.
            Those who are interested to join the free online sessions on IAM, please send a mail to me by using the information in the Contact tab.
            <br/>Timings: Friday 9pm IST (11:30am EST)
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