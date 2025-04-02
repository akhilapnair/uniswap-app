import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import upimage from './Product/images/uploadimg.png';
import { addProduct } from '../../service/product.service';

const Form = ({ categories }) => {
  console.log(  'Form component categories:', categories);
  
  const user = useSelector((state) => state.user);
  
  const [files, setFiles] = useState(null);
  const [imageAvailable, setImageAvailable] = useState(false);
  const [err, setErr] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    price: '',
    desc: '',
  });

  const checkValidImg = (contentType) => {
    return ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(contentType);
  };

  const fileSelectHandler = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const isValid = selectedFiles.every((file) => checkValidImg(file.type));

    setFiles(selectedFiles);
    setImageAvailable(selectedFiles.length > 0 && isValid);
    setErr(!isValid);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm =async (e) => {
    e.preventDefault();
    if (err) return;

    const fd = new FormData();
    Object.keys(formData).forEach((key) => fd.append(key, formData[key]));
    fd.append('timestamp', new Date().toISOString());
    fd.append('owner', 'username');
    fd.append('status', 'Available');
    fd.append('imageIsAvailable', imageAvailable);

    if (imageAvailable) {
      files.forEach((file) => fd.append('files', file, file.name));
    }
    const response = await addProduct(formData);
    console.log('News Added:', response)
    const data = await addProduct(user);

    // axios.post('/uploaditem', fd).then(() => {
    //   window.location = '/sell';
    // }).catch((error) => console.error('Error uploading item:', error));
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Category</label>
          {/* <select className="form-control" name="category" onChange={handleChange}>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>{category.name}</option>
            ))}
          </select> */}
        </div>

        <div className="form-group">
          <label>Name Of Item</label>
          <input type="text" className="form-control" name="name" placeholder="e.g., Harry Potter Books" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Expected Price (Approx)</label>
          <input type="text" className="form-control" name="price" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Short Description</label>
          <textarea className="form-control" name="desc" rows="3" onChange={handleChange}></textarea>
        </div>

        <h6><img src={upimage} alt="Upload" /> Upload image</h6>
        <input type="file" name="files" onChange={fileSelectHandler} accept="image/*" multiple />

        {err && <div className="alert alert-danger"><strong>Error:</strong> Only image files are allowed!</div>}

        <button className="btn btn-primary submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
