import './styles.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import books from './img/books.jpg';
import youwant from './img/youwant.jpg';
import tired from './img/tired.jpg';
import { Link } from 'react-router-dom';
import { registerUser, RegisterUser } from '../../service/registration.service';

const SignUp = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      fname: e.target.fname.value,
      phoneno: e.target.phoneno.value,
      password: e.target.password.value,
      rpassword: e.target.rpassword.value,
    };

    try {
      const data = await registerUser(user);
      console.log('data', data);
      navigate('/buy', { state: { success: true, msg: 'Registered Successfully!' } });
      // const response = await axios.post('http://localhost:5000/api/auth/verifyuser', user);
      // if (response.data.success) {
      //   navigate('/', { state: { success: true, msg: 'Registered Successfully!' } });
      // } else {
      //   setErrors(response.data.errors.map((error) => error.msg));
      // }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

 
  return (
    <div className="container-register">
      <div className="error">
        {errors.map((err, idx) => (
          <div className="alert alert-danger" key={idx}>
            <strong>Error: </strong> {err}
          </div>
        ))}
      </div>
      <div className="card mb-3 w-95" id="card">
        <div className="row no-gutters">
          <div className="col-lg-8">
            <div className="bd-example">
              <div className="flex-centered">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={books} className="d-block w-100" alt="Books" />
                      <div className="carousel-caption d-none d-md-block">
                        <h2>Your one-stop destination for books</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={youwant} className="d-block w-100" alt="Desire" />
                      <div className="carousel-caption d-none d-md-block">
                        <h2>"Kehte hain ki…agar kisi cheez ko dil se chaaho to BES!T usey tumse milane ki koshish mein lag jaati hai."</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={tired} className="d-block w-100" alt="Search" />
                      <div className="carousel-caption d-none d-md-block">
                        <h2>We don't know who you are, but we will find it and bring it to you.</h2>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-body">
              <form className="registerform" onSubmit={handleSubmit}>
                <input type="text" className="form-control" name="username" placeholder="Username" required />
                <input type="text" className="form-control" name="fname" placeholder="Name" required />
                <input type="text" className="form-control" name="email" placeholder="Email" required />
                <input type="text" className="form-control" name="phoneno" placeholder="Phone Number" required />
                <input type="password" className="form-control" name="password" placeholder="Password" required />
                <input type="password" className="form-control" name="rpassword" placeholder="Confirm Password" required />
                <button type="submit" className="btn btn-primary">Submit</button>
                <span className="psw">Already have an account? <Link to="/">Login now</Link></span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
