import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Product from '../Product/Product';
import Button from '../Button';

const Products = () => {
  const [items, setItems] = useState([]);
  const [itemsAvailable, setItemsAvailable] = useState(false);
  const [cnt, setCnt] = useState([]);
  
  const user = useSelector(state => state.user);
  
  // useEffect(() => {
  //   if (user) {
  //     fetchItems();
  //   }
  // }, [user]);

  const fetchItems = async () => {
    try {
      const res = await axios.get('/api/getitems', {
        params: { username: user.username }
      });

      const sortedItems = res.data.sort((item1, item2) => 
        (item1.timestamp < item2.timestamp ? 1 : -1)
      );

      setItems(sortedItems);
      setItemsAvailable(true);
      
      const temp = Array.from({ length: Math.ceil(sortedItems.length / 2) }, (_, i) => i);
      setCnt(temp);
      
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div>
      <Button />
      {/* items.length > 0 &&  */}
      {(
        <div className="container">
          <h2 style={{ marginTop: '15px' }}>
            <img src="https://img.icons8.com/cotton/56/000000/list--v1.png" alt="items" />
            <label className="sellhead">All Your Items:</label>
          </h2>
        </div>
      )}

      <div className="container" style={{ marginBottom: "20px", maxWidth: "1300px" }}>
        {items.length > 0 ? (
          cnt.map((idx, index) => (
            <div className="row" key={index}>
              <div className="col-sm-6">
                <Product key={items[idx * 2]._id} item={items[idx * 2]} id={items[idx * 2]._id} />
              </div>
              {idx * 2 + 1 < items.length && (
                <div className="col-sm-6">
                  <Product key={items[idx * 2 + 1]._id} item={items[idx * 2 + 1]} id={items[idx * 2 + 1]._id} />
                </div>
              )}
            </div>
          ))
        ) : (
          <h2 style={{ marginTop: '15px', textAlign: 'center' }}>No items available to display</h2>
        )}
      </div>
    </div>
  );
};

export default Products;
