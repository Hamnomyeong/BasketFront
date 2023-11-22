import { useNavigate } from 'react-router-dom';
import './Main.css';


const Main = () => {
    
    const navigate = useNavigate();

    return (
      <>
      <div className='Main-container' onClick={()=>{navigate('/Home')}}>
        <div className='Main-wrap'>
          <p className='Main-txt'> 매일 담는 신선함 </p>
          <div className='Main-logo'/>
        </div>
      </div>
      </>
  );
}

export default Main;