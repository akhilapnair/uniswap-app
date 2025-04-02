import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import HomeNav from '../HomeNav/HomeNav';
import Item from './Item';
import httpService from '../../service/httpservice';
import { productList } from '../../service/product.service';

const Buy = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [cnt, setCnt] = useState([]);
  const user = useSelector(state => state.user);

  // Fetch categories when component mounts
  // useEffect(() => {
  //   axios.get('/admin/getcategories')
  //     .then(res => {
  //       setCategories(res.data);
  //     })
  //     .catch(error => console.error("Error fetching categories:", error));
  // }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    let searchAll = e.target[1].value === '';

    try {
      const res = await productList( {
        searchText: '',
        searchAll,
        category: e.target[0].value,
        user
      });

      let sortedItems = res.data.sort((item1, item2) => 
        (item1.timestamp < item2.timestamp ? 1 : -1)
      );

      setItems(sortedItems);
      setCnt([...Array(Math.ceil(sortedItems.length / 2)).keys()]);

    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <div>
      <HomeNav />
      <div className="container" style={{ padding: "10px" }}>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label className="cat">
              <img src="https://img.icons8.com/color/48/000000/categorize.png" alt="category" />
              Category
            </label>
            <select className="form-control">
              <option key="0">Any</option>
              {categories.map(category => (
                <option key={category._id}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Find Text Books, Novels, Electronics and more" 
              aria-label="search" 
            />
            <button className="btn btn-default" type="submit" style={{ marginLeft: "15px" }}>
              <img src="https://img.icons8.com/cotton/50/000000/detective.png" alt="search" />
            </button>
          </div>
        </form>

        <div style={{ marginBottom: "20px" }}>
          <h3 className="display-4" style={{ fontSize: "150%" }}>
            <label className="srch">
              <img src="https://img.icons8.com/dusk/64/000000/test-passed.png" alt="results" />
              Search Results:
            </label>
          </h3>
        </div>
      </div>

      <div className="container-fluid" style={{ maxWidth: "1300px" }}>
        {items.length > 0 ? (
          cnt.map((idx, index) => (
            <div className="row" key={index}>
              <div className="col-sm-6">
                <Item key={items[idx * 2]._id} item={items[idx * 2]} user={user} />
              </div>
              {idx * 2 + 1 < items.length && (
                <div className="col-sm-6">
                  <Item key={items[idx * 2 + 1]._id} item={items[idx * 2 + 1]} user={user} />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="container">
            <h4 style={{ fontSize: "100%" }}>
              No results found 
              <img src="https://img.icons8.com/ultraviolet/40/000000/drama.png" alt="no-results" />
            </h4>
            <p className="lead" style={{ fontSize: "100%", color: "red" }}>
              (Tip: search with empty query to get all items)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buy;
