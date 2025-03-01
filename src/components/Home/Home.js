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
        
        <p>
        This is a portfolio site which has a summary about myself and a link to a blog site I am maintaining.
        <br/>
        <br/>
        <h2>About..</h2>
        I am George V. Thomas, a graduate engineer who at initial days worked in the mechanical industry for a short term and later got switched to software firms.
        <br/> 
        <br/>
        Domain Experience:<br/> Identity and Access Management, Payment etc.
        <br/>
        <br/>
        In software firms, I have experience about 23+ years.  My current company is Trianz, Bangalore where I work for 16+ years and over the past 6+ years as an Architect.
        <br/>
        <br/>
        Interested in suitable job opportunities in the Identity and Access Management domain, leading a team, or working as a Software Architect in Java or related technologies.
        </p>
        <img src={pinkflower} alt="pink flower image"></img>
        </div>
        <Footer/>
        </div>
      );    
}
export default Home;