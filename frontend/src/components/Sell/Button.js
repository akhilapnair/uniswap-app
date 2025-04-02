import React, { useState, useEffect } from 'react';
import Form from './Form';
import './Product/Product.css';
import axios from 'axios';

const Button = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   axios.get('/admin/getcategories')
  //     .then(res => setCategories(res.data))
  //     .catch(error => console.error('Error fetching categories:', error));
  // }, []);

  return (
    <div className="container">
      <button 
        className="btn btn-primary btn-xs new-item-btn box-shadow--8dp" 
        onClick={() => setOpen(true)} 
        data-toggle="modal" 
        data-target="#uploaditem"
      >
        +
      </button>
      <div 
        className={`modal fade ${open ? 'show d-block' : ''}`} 
        id="uploaditem" 
        tabIndex="-1" 
        role="dialog" 
        aria-labelledby="uploadModalLabel" 
        aria-hidden={!open}
      >
        <div className="modal-dialog uploadItemDialog" role="document">
          <div className="modal-content" style={{ width: "150%" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="uploadModalLabel">Upload Item</h5>
              <button 
                type="button" 
                className="close" 
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body uploadItemBody">
              {open && <Form />}
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="modal fade" id="uploaditem" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog uploadItemDialog" role="document">
          <div className="modal-content" style={{ width: "150%" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Upload Item</h5>
              <button 
                type="button" 
                className="close" 
                onClick={() => setOpen(false)} 
                data-dismiss="modal" 
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body uploadItemBody">
              {open && <Form categories={categories} />}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Button;
