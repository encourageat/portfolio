import './Blog.css'
//import { useEffect } from 'react'
import PageHeader from '../PageHeader/PageHeader'
import pinkflower from '../../img/pinkflower.jpg'


const Blog = () => {


    return (
        <div className="About">
        <div>
            <PageHeader title={'Blog..'}/>
        </div> 
        <div className="Aboutdetails">
        <p>I maintain a seperate blog site and it mainly contains technical articles. 
        <br/>
        For visiting the blog site, click<a href="https://encourageat.github.io/blog/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}> here.</a>
        </p>
        <img src={pinkflower} alt="pink flower image"></img>
        </div>
        </div>
      );    
}
export default Blog;
/*
      <div>
            <PageHeader title={'About..'}/>
        </div>
        */