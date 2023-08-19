import './Home.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'

const Home = () => {
    return (
        <div className="Home"> 
        <div>
            <PageHeader title={'Welcome..'}/>
        </div>
        <div className="Homedetails">
        <p>
            Free online training on Identity And Access Management (IAM)
            <br/>
            <br/>
            Contact Email: 
            <br/>
            encourageat@gmail.com
        </p>
        <img src={pinkflower} alt="pink flower image"></img>
        </div>
        </div>
      );    
}
export default Home;