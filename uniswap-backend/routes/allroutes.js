const express = require("express");
const { verifyUser } = require("../controllers/authController");
const User = require("../models/user");
const utils = require('../utils/utils');
const jwtHandler = require('./../auth/token');

const router = express.Router();

router.post("/verifyuser", verifyUser); // Verify User API
// router.post('/login', (req, res) => {
//     console.log(req.body, '--------------------->');
//     User.findOne({ username: req.body.username }).then(result => {
//         let err = false;
//         let success = true;
//         let cleanUser;
//         if (result) {
//             if (result.password !== req.body.password) {
//                 err = true;
//                 success = false;
//             }
//             cleanUser = utils.getCleanUser(result);
//         }
//         else {
//             err = true;
//             success = false;
//         }

//         const response = {
//             success: success,
//             error: err,
//             msg: 'Invalid username or password',
//             user: cleanUser,
//             token: null
//         };

//         if (err === false) {
//             let token = jwtHandler.generateToken(result);
//             response.token = token;
//         }
//         res.send(response);
//     });
// });
module.exports = router;
