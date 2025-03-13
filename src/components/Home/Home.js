import './Home.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className="Home"> 
        <div>
            <PageHeader title={'Welcome..'}/>
        </div>      
        <div className="Homedetails">
        <p>Open to immediate roles..
        <br/>
        <br/>
        <h2>About..</h2>
        I am George V. Thomas, a graduate engineer who at initial days worked in the mechanical industry for a short term and later got switched to software firms.
        <br/> 
        <br/>
        Domain Experience:<br/> Identity and Access Management, Payment etc.
        <br/>
        <br/>
        I am an experienced Software Architect specializing in Identity and Access Management (IAM) and Java technologies, with over 23 years experience with software firms. Open to opportunities which I can perform from Kerala state of India, including contract, freelance and part time roles in IAM or Java-related domains.  
        <br/>
        <br/>Email: encourageat@gmail.com
        </p>
        <img src={pinkflower} alt="pink flower image"></img>
        </div>
        <Footer/>
        </div>
      );    
}
export default Home;