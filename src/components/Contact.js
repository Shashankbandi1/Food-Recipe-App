import { Link } from 'react-router-dom';
export const Contact = () => {
    return <div>
        <div className='header' >
           <h2>Food Receipe App</h2>
           <div className='primary-nav'>
              <div><Link to="/Recipes">Recipes</Link></div>
              <div><Link to="/About">About</Link></div>
              <div><Link to="/contact">Contact</Link></div>
          </div>
        </div>
        <div></div>
        <div></div>
    </div>
}


