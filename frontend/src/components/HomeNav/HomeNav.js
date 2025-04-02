// Import dependencies
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, logOutUser } from "./../../actions/userActions";
import { authorize } from "./../../utils/authorize";
import axios from "axios";
import "./styles.css";

const HomeNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state) => state.userLoggedIn);
  const user = useSelector((state) => state.user);
  
  const [nofNotifications, setNofNotifications] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [notificationsAvailable, setNotificationsAvailable] = useState(false);
  const [status, setStatus] = useState(["active", "", "", "", ""]);
  const [seenNotifications, setSeenNotifications] = useState(false);

  // useEffect(() => {
  //   if (!userLoggedIn) {
  //     const token = localStorage.getItem("access_token");
  //     authorize(token).then((result) => {
  //       if (result.success) {
  //         axios
  //           .get("/notify/notifications", {
  //             params: { username: result.user.username },
  //           })
  //           .then((res) => {
  //             const unseenCount = res.data.filter(n => !n.seenStatus).length;
  //             setNotifications(res.data);
  //             setNotificationsAvailable(true);
  //             setNofNotifications(unseenCount);
  //           });
  //         dispatch(logInUser(result.user));
  //       } else {
  //         if (result.remove) {
  //           localStorage.removeItem("access_token");
  //         }
  //         navigate("/login");
  //       }
  //     });
  //   } else {
  //     axios.get("/notify/notifications", {
  //       params: { username: user.username },
  //     }).then((res) => {
  //       const unseenCount = res.data.filter(n => !n.seenStatus).length;
  //       setNotifications(res.data);
  //       setNotificationsAvailable(true);
  //       setNofNotifications(unseenCount);
  //     });
  //   }

  //   const key = location.state?.key || 0;
  //   setStatus(status.map((_, i) => (i === key ? "active" : "")));
  // }, [userLoggedIn, user, location.state, navigate, dispatch]);

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("access_token");
    dispatch(logOutUser());
    navigate("/login");
  };

  const notificationHandler = () => {
    if (!seenNotifications) {
      axios.get("/notify/seen", {
        params: { username: user.username },
      });
      setSeenNotifications(true);
    }
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
        <span className="navbar-toggler-icon"></span>
      </button>
      <img src="https://img.icons8.com/nolan/70/000000/shopping-cart.png" alt="logo" />
      <div className="logoname">App Name</div>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav homenav">
          {["/buy", "/buy", "/sell", "/requirements", "/user"].map((path, i) => (
            <li key={i} className={`nav-item ${status[i]}`}>
              <Link to={path} className="nav-link">{[ "Buy", "Sell", "Requirements", "User"][i]}</Link>
            </li>
          ))}
          <li className="nav-item">
            <a className="nav-link" href="" onClick={logOut}>Logout</a>
          </li>
          <li>
            <div className="dropdown">
              {/* <button className="btn btn-dark dropdown-toggle notification-dropdown-button" type="button" data-toggle="dropdown" onClick={notificationHandler}>
                <img src="https://img.icons8.com/color/32/000000/appointment-reminders.png" className="bell-img" alt="notifications" />({nofNotifications})
              </button> */}
              <div className="dropdown-menu notification-dropdown">
                <h6 className="dropdown-header notification-item">Notifications</h6>
                {notifications.length > 0 ? notifications.map((notification, index) => (
                  <div key={index}>
                    <div className="dropdown-divider"></div>
                    <button className={`dropdown-item notification-item ${notification.seenStatus ? '' : 'unseen'}`}>
                      <strong>{notification.sourceUsername}</strong> {notification.type.toLowerCase()} <strong>{notification.productName}</strong>
                    </button>
                  </div>
                )) : (
                  <div>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item notification-item">
                      <strong>No Notifications to show!</strong>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNav;
