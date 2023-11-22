import { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import './Home.css';
import Item from "../components/Item";


const Home = () => {


  const [search, setSearch] = useState('');

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

    return (
      <>
    <div>
     <Banner/>
  {/* <Category/> */}
     <div className="Home-search-con">
          <div className="Home-search-wrap">
            <input className="Home-search" type="text" name="search" placeholder="무엇을 찾아 드릴까요?" onChange={changeHandler} />
            <div className="Home-search-btn" ></div>
          </div>
     </div>
     <Item/>




     <Navbar/>
    </div>
      
      </>
  );
}

export default Home;