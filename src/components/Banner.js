import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';


function Banner() {
  return (
    <div className='Banner-Wrap'>
    <Carousel indicators={true} controls={true} wrap={true}  fade={true}
           carousel-control-prev-icon="true" 
           carousel-control-next-icon="true">   
           
      <Carousel.Item>
      <img className='BannerImage1'/>
      {/* <img className='BannerImage1' src="holder.js/800x400?text=First slide&bg=f5f5f5"/> */}
      </Carousel.Item>

      <Carousel.Item>
      <img className='BannerImage2'/>
      </Carousel.Item>

      <Carousel.Item>
        <img className='BannerImage3' />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;