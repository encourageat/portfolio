import './Contact.css'
import PageHeader from '../../components/PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'

const Contact = () => {
    return (
        <div className="Contact"> 
        <div>
            <PageHeader title={'Contact Details..'}/>
        </div>
        <div className="Contactdetails">
        <p>
            Email: 
            <br/>
            encourageat@gmail.com
        </p>
        <img src={pinkflower} alt="pink flower image"></img>
        </div>
        </div>
      );   
}
export default Contact;