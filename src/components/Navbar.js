import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate ();

    return (
      <>
    <div className='Nav-con'>
  
      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/')}}>
      <img src={process.env.PUBLIC_URL + '/img/home-w.svg'} />
      </button>

      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/category')}}>
      <img src={process.env.PUBLIC_URL + '/img/category-w.svg'} />
      </button>
     
      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/like')}}>
      <img src={process.env.PUBLIC_URL + '/img/like-w.svg'} />
      </button>
   
      <button class="Nav-menu" type="button"  onClick={()=> {navigate('/my')}}>
      <img src={process.env.PUBLIC_URL + '/img/my-w.svg'} />
      </button>

  </div>
      
      </>
  );
}

export default Navbar;