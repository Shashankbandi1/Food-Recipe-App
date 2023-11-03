import { Link } from 'react-router-dom';
export const About = () => {
    return <div>
        <div className='header' >
           <h2>Food Receipe App</h2>
           <div className='primary-nav'>
              <div>About</div>
              <div><Link to="/About">Contact</Link></div>
          </div>
        </div>
    </div>
}