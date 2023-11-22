import { useNavigate } from "react-router-dom"
import './Item.css';
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";


const Item = () => {

  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const itemList = await db.collection('product').get();

      const data = itemList.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setItems(data);
    };

    fetchData();
  }, []);
  

  return (
    <div className="Item-Wrap" style={{ cursor: 'pointer' }}>
      <Row xs={3} md={3} lg={3} className="g-4" style={{ margin: '10px' }}>
        {items.map((item) => (
          <div className="Item" key={item.id}>
            <img
              src={item.imageUrl || "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              onClick={() => {
                navigate('./Detail/' + item.id);
              }}
              style={{ cursor: 'pointer' }}
            />

            <div className="Item-save">
              <img src={process.env.PUBLIC_URL + '/img/like-w.svg'} alt="Like" />
              <img src={process.env.PUBLIC_URL + '/img/cart-w.svg'} alt="Cart" />
            </div>

            <div className="Item-save">
              <p className="Item-salePrice">${item.salePrice}</p>
              <p className="Item-price">${item.price}</p>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
};


 
export default Item;

